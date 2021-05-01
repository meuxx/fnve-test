import express from 'express'
import { getPosts, getComments } from './services/postService'

const app = express()
const PORT = 8000

app.get('/v1/post', async (req, res) => {
  // TODO handle error
  res.send(await getPosts())
})

app.get('/v1/post/:id/comment', async (req, res) => {
  res.send(await getComments(parseInt(req.params.id, 10)))
})

app.listen(PORT, () => {
  console.info(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
