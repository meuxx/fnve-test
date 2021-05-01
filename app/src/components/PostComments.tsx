import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components/macro'

import { PostComment as PostCommentType } from '../types'
import PostComment from './PostComment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const PostComments: React.FC<{ postId: number }> = ({ postId }) => {
  const { isLoading, error, data } = useQuery<PostCommentType[], Error>(
    `post_comments_${postId}`,
    () => fetch(`/v1/post/${postId}/comment`).then((res) => res.json())
  )

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>

  return (
    <Container>
      {data?.map((comment) => {
        return <PostComment key={comment.id} data={comment} />
      })}
    </Container>
  )
}

export default PostComments
