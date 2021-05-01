import React from 'react'
import styled from 'styled-components/macro'

import { PostComment as PostCommentType } from '../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Author = styled.div`
  font-weight: bold;
`

const PostComments: React.FC<{ data: PostCommentType }> = ({ data }) => {
  return (
    <Container>
      <Author>{data.author}</Author>
      {data.content}
    </Container>
  )
}

export default PostComments
