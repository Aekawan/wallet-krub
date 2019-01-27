import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Content>
      { children }
    </Content>
    <Footer />
  </Container>
)

export default Layout

