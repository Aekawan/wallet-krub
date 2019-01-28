import React from 'react'
import styled from 'styled-components'

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

const ItemComponent = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 30px;
  &.active {
    color: #eb3349;
    border-bottom: 2px solid #eb3349;
  }
  &:hover {
    color: #eb3349;
  }
`

const Item = ({ className, text = '', onClick }) => (
  <ItemComponent className={className} onClick={onClick}>
    {text}
  </ItemComponent>
)

class Menu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  onItemClick = (id) => {
    this.setState({ active: id })
  }
  
  render() {
    const { active } = this.state
    const { items } = this.props
    return (
      <Container>
        <List>
          {
            items.map((item, id) => (
              <Item 
                className={active === id ? 'active' : ''} 
                onClick={() => this.onItemClick(id)}
                text={item}
              />
            ))
          }
        </List>
      </Container>
    )
  }
}


export default Menu