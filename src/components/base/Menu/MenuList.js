import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
  overflow-y: hidden;
  margin-top: 10px;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 16px;
`

const Item = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 30px;
  &:hover {
    color: #eb3349;
    border-bottom: 2px solid #eb3349;
  }
`

const Menu = ({ items = [] }) => (
  <Container>
    <List>
      {
        R.map(item => (
           <Item>{item}</Item>
        ))(items)
      }
    </List>
  </Container>
)

export default Menu