import React, { useState } from 'react'
import { Post as PostType } from '../types'
import styled from 'styled-components/macro'
import PostComments from './PostComments'

// TODO move styles to a separate file
const Container = styled.div`
  background-color: white;
  overflow: hidden;
  position: relative;

  &:hover > div {
    display: flex;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
`

const Footer = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  color: black;
  padding: 10px;
`

const FooterTitle = styled.div`
  display: flex;
  font-weight: bold;
`

const ShowCommentsButton = styled.button`
  border: none;
  background-color: lightgray;
  padding: 5px;
  border-radius: 3px;
`

const Post: React.FC<{ data: PostType }> = ({ data }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <Container>
      <Image src={data.thumbnailUrl} alt="" />
      <Footer>
        <FooterTitle>
          <div>{data.title}</div>

          <ShowCommentsButton onClick={() => setShowComments(!showComments)}>
            {showComments ? 'Hide comments' : 'Show Comments'}
          </ShowCommentsButton>
        </FooterTitle>

        {showComments && <PostComments postId={data.id} />}
      </Footer>
    </Container>
  )
}

export default Post
