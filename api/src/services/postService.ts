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

const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Photo[]>(
    'https://jsonplaceholder.typicode.com/photos'
  )

  return response.data.map(
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

const getComments = async (postId: number): Promise<PostComment[]> => {
  // TODO generate all the data on boot, store on memory
  return [
    {
      id: faker.datatype.number(30),
      postId,
      author: faker.internet.userName(),
      content: faker.lorem.paragraph(),
    },
  ]
}

export { getPosts, getComments }
