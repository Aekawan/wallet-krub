import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`

const Content = ({ children }) => (
  <ContentWrapper>
    { children }
  </ContentWrapper>
)

export default Content