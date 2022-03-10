import React, { useState, useEffect } from "react";
import Title from "./Title";
import axios from "axios";

const DisplayPage = () => {
  const [title, setTitle] = useState("");
  const [novels, setNovels] = useState([]);
  const [searchTitle, setSearchTitle] = useState([]);

  useEffect(() => {
    const fetchNovel = async () => {
      const fetchData = await axios.get("http://localhost:1337/api/novels");
      setNovels(fetchData.data);
    };
    fetchNovel();
  }, []);

  useEffect(() => {
    setSearchTitle(
      novels.filter((novels) =>
        novels.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  }, [novels, title]);

  console.log(novels);
  
  
  return (
    <div className="displayPage">
<Title/>
      <input
        className="searchBar"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="searchTitle">
          {searchTitle.map(name => {
              return(
                  <div>
                      {name.title} by {name.author.nameFirst} {name.author.nameLast}

                  </div> 
              )
          })}
          
      </div>
    
    </div>
  )
}

export default DisplayPage;
