import React from 'react';
import styled from 'styled-components'
import './App.css';
import Layout from '../src/Layout'
import { H2, H3 } from '../src/components/Typography'
import Menu from '../src/components/base/Menu/index'
import Card from '../src/components/base/Card'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`

const Column = styled.div`
  display: flex;
`


const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0 30px 0;
  background: #f5f6fa;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 0;
`

/*const Cart = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #FFFF;
  box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.1);
  border: 2px solid #eb3349;
  border-radius: 10px;
`*/

class App extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Menu title={['TruePoint', 'Shopping']} items={['ทั้งหมด', 'ถั่วลิสง', 'นมเปรี้ยว', 'เกี๊ยวซ่า', 'ไอติม', 'แฟนต้า', 'อื่นๆ']} />
        <ProductsContainer>
          <Container className="container">
            <Container className="columns">
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
                <Column className="column is-2 is-mobile-6">
                  <Card/>
                </Column>
              </Container>
          </Container>
        </ProductsContainer>
      </Layout>
    );
  }
}

export default App;
