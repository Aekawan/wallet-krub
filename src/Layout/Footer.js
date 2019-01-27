import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: transparent;
	bottom: 0px;
	width: 100%;
  padding: 0;
`

const FooterContent = styled.div`
  height: 100px;
  background: #f2f2f2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 40px;
`

const Line = styled.div`
  height: 5px;
  background-image: linear-gradient(to right, #eb3349 , #f45c43);
`

const Footer = () => (
  <FooterContainer className="footer">
  <FooterContent>
    aaaaaaa 
  </FooterContent>
  <Line/>
  </FooterContainer>
)

export default Footer