import axios from 'axios'
import { Post } from '../types'

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

export { getPosts }
