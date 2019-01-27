import React from 'react';
import styled from 'styled-components'
import './App.css';
import Layout from '../src/Layout'
import { H2, H3 } from '../src/components/Typography'
import Menu from '../src/components/base/Menu/index'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const Column = styled.div`
  display: flex;
`


const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  margin-top: 10px;
  background: #f5f6fa;
  justify-content: flex-start;
  align-items: flex-start;
`



class App extends React.Component {
  render() {
    return (
      <Layout>
        <Menu title="TruePoint Shopping" items={['ถั่วลิสง', 'นมเปรี้ยว', 'เกี๊ยวซ่า', 'ไอติม', 'แฟนต้า', 'อื่นๆ']} />
        <ProductsContainer>
        </ProductsContainer>
      </Layout>
    );
  }
}

export default App;
