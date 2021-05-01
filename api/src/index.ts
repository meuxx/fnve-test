import express from 'express'
import { getPosts } from './services/postService'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('Hello World'))

app.get('/post', async (req, res) => {
  // TODO handle error
  res.send(await getPosts())
})

app.listen(PORT, () => {
  console.info(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
