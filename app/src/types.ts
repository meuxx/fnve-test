// TODO create common workspace to share these types with the backend
export interface Post {
  id: number
  title: string
  pictureUrl: string
  thumbnailUrl: string
}

export interface PostComment {
  id: number
  postId: number
  author: string
  content: string
}
