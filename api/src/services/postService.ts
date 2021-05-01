import axios from 'axios'
import { Post, PostComment } from '../types'
import faker from 'faker'

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

// TODO implement pagination
const POSTS_PER_PAGE = 30
const MAX_COMMENTS_PER_POST = 5

// TODO generate all the data on boot, store on memory

const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Photo[]>(
    'https://jsonplaceholder.typicode.com/photos'
  )

  return response.data.slice(0, POSTS_PER_PAGE).map(
    (photo): Post => {
      return {
        id: photo.id,
        title: photo.title,
        pictureUrl: photo.url,
        thumbnailUrl: photo.thumbnailUrl,
      }
    }
  )
}

const generateComment = (postId: number, index: number): PostComment => {
  return {
    id: postId * 100 + index,
    postId,
    author: faker.internet.userName(),
    content: faker.lorem.paragraph(),
  }
}

const getComments = async (postId: number): Promise<PostComment[]> => {
  return Array.from({
    length: faker.datatype.number(MAX_COMMENTS_PER_POST + 1) - 1,
  }).map((_, index) => generateComment(postId, index))
}

export { getPosts, getComments }
