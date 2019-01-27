import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
`

const Content = ({ children }) => (
  <ContentWrapper>
    { children }
  </ContentWrapper>
)

export default Content