import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { normalize } from 'styled-normalize'
import { QueryClient, QueryClientProvider } from 'react-query'

import PostList from './components/PostList'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Content = styled.main`
  flex: 0 0 100%;
  background-color: #282c34;
  color: white;
  max-width: 1180px;
  display: block;
`

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Container>
        <Content>
          <PostList />
        </Content>
      </Container>
    </QueryClientProvider>
  )
}

export default App
