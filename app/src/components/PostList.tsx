import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components/macro'
import { Post as PostType } from '../types'
import Post from './Post'


const Title = styled.h1`
  text-align: center;
`

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`

const PostList: React.FC = () => {
  const { isLoading, error, data } = useQuery<PostType[], Error>('posts', () =>
    fetch('/v1/post').then((res) => res.json())
  )

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>

  return (
    <>
      <Title>Photos</Title>
      <PostContainer>
        {data?.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </PostContainer>
    </>
  )
}

export default PostList
