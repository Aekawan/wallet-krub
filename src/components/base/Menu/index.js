import React from 'react'
import styled from 'styled-components'
import MenuList from './MenuList'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const Column = styled.div`
  display: flex;
`

/*const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 100%;
  background-image: linear-gradient(to right, #eb3349 , #f45c43);
  border-radius: 15px;
  box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.3);
  border: 5px solid #f45c43;
`
*/

const TruePoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.h2`
  cursor: pointer;
  &.title {
    margin-bottom: 10px;
  }
  transition: .5s;
  &:hover {
    color: #eb3349;
  }
`

const Line = styled.div`
  height: 5px;
  width: 500px;
  background-image: linear-gradient(to right, #eb3349 , #f45c43);
` 

const ContentContainer = styled.div`
  display: flex;
`

const Menu = ({ title = '', items = [] }) => (
  <ContentContainer className="container">
    <Container className="columns">
      <Column className="column is-full-mobile">
        <TruePoint>
          <Title className="title is-2">{title}</Title>
          <Line/>
          <MenuList items={items} />
        </TruePoint>
      </Column>
    </Container>
  </ContentContainer>
)

export default Menu