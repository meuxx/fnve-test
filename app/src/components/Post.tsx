import React from 'react'
import { Post as PostType } from '../types'
import styled from 'styled-components/macro'

// TODO move styles to a separate file
const Container = styled.div`
  background-color: white;
  overflow: hidden;
  position: relative;

  &:hover > div {
    display: block;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
`

const Footer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  color: black;
  padding: 2px;
`

const Post: React.FC<{ data: PostType }> = ({ data }) => {
  return (
    <Container>
      <Image src={data.thumbnailUrl} alt="" />
      <Footer>
        <span>{data.title}</span>
      </Footer>
    </Container>
  )
}

export default Post
