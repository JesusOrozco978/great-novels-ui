const express = require('express')
const cors = require('cors')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/novels')
const path = require('path')


const app = express()

app.use(express.static('client/build'))

app.use(cors())

app.get('/api/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdOrName)

app.get('/api/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/api/novels', getAllNovels)
app.get('/api/novels/:identifier', getNovelByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
