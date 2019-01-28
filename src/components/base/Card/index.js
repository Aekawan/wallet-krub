import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 250px;
  width: 100%;
  border: 2px solid transparent;
  transition: .3s;
  border-radius: 10px;
  box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.1);
  &:hover {
    box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.3);
    border: 2px solid #eb3349;
  }
`

const Container = styled.div`
  display: flex;
`

const CardContent = styled.div`
  border: 0px;
  padding: 10px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > a > i {
    margin-right: 10px;
  }
  /*> a {
    background-image: linear-gradient(to right, #eb3349 , #f45c43);
    color: #FFFFFF;
  }*/
`

const Picture = styled.img`
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`


const Card = ({ }) => (
  <CardContainer className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <Picture src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <CardContent className="card-content">
    <Container className="media">
      <div className="media-content">
        <p className="title is-6">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </Container>
    <Content className="content">
      <a class="button is-rounded is-success">
      <i className="fas fa-shopping-basket basket"></i>
      ใส่ตระกร้า
      </a>
    </Content>
  </CardContent>
</CardContainer>
)

export default Card