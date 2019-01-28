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

const Line = styled.div`
  height: 5px;
  width: 500px;
  background-image: linear-gradient(to right, #eb3349 , #f45c43);
` 

const ContentContainer = styled.div`
  display: flex;
`

const TitleContiane = styled.div`
  display: flex;
`

const Title1 = styled.h2`
  cursor: pointer;
  &.title {
    margin-bottom: 10px;
  }
  color: #eb3349;
`

const Title2 = styled.h2`
  cursor: pointer;
  &.title {
    margin: 0 0 10px 10px; 
  }
  color: #212121;
`

const Menu = ({ title = ['',''], items = [] }) => (
  <ContentContainer className="container">
    <Container className="columns">
      <Column className="column is-full-mobile">
        <TruePoint>
          <TitleContiane>
             <Title1 className="title is-2">{title[0]}</Title1>
             <Title2 className="title is-2">{title[1]}</Title2>
          </TitleContiane>
          <Line/>
          <MenuList items={items} />
        </TruePoint>
      </Column>
    </Container>
  </ContentContainer>
)

export default Menu