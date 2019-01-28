import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
  background-image: linear-gradient(to right, #eb3349 , #f45c43);
  height: 70px;
  box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.3);
` 
const Title = styled.a`
  font-family: 'Righteous', cursive;
  font-size: 40px;
  color: #FFFF;
  transition: .5s;
  &.navbar-item:hover {
    color: #000000;
    background: transparent;
  }
`

const NavBrand = styled.div`
  margin-left: 10px;
  display: flex;
`

const NavbarMenu = styled.div`
  display: flex;
`

const NavbarStart = styled.div`
  display: flex;
  margin-left: 20px;
  > a {
    border-right: 1px solid #FFFF;
    color: #FFFF;
    margin: 20px 0;
    transition: .5s;
  }
  > a:hover {
    text-decoration: underline;
    background: transparent;
    color: #FFFF;
  }
  > a:last-child {
    border-right: 0px;
  }
`

const NavberEnd = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  > a {
    position: relative;
    /*background: #0984e3;
    border: 2px solid #FFFFFF;
    box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.3);*/
    color: #FFFFFF;
    margin: 20px 0;
    border-right: 1px solid #FFFF;
  }
  > a:hover {
    /*background: #0984e3;*/
    background: transparent;
    color: #FFFFFF;
  }
  > a:last-child {
    border-right: 0px;
  }
  > a > i {
    margin-right: 5px;
    font-size: 20px;
    color: #FFFF;
    &.basket {
     font-size: 30px;
    }
  }

  > a.with-budget {
    position: relative;
    > div.budget {
      position: absolute;
      font-size: 8px;
      display: flex;
      right: 0;
      bottom: 0;
      margin: 0 15px 5px 0;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #44bd32;
    }
  }
`



const Header = ({ title = ' Wallet Krub' }) => (
 <Navbar className="navbar is-fixed-top">
  <NavBrand className="navbar-brand">
    <Title className="navbar-item" href="https://bulma.io">
      {title}
    </Title>
  </NavBrand>
  <NavbarMenu className="navbar-menu">
    <NavbarStart className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        TruePiont ช็อปปิ้ง
      </a>
      <a className="navbar-item" href="https://bulma.io/">
        โอนWallet เข้าบัญชีธนาคาร
      </a>
      <a className="navbar-item" href="https://bulma.io/">
        รูดบัตรเครดิตเป็นเงินสด
      </a>
    </NavbarStart>
    <NavberEnd className="navbar-end">
      <a className="navbar-item">
       <i className="fas fa-user"></i>
        เข้าสู่ระบบ/ลงทะเบียน
      </a>
      <a className="navbar-item with-budget">
        <i className="fas fa-shopping-basket basket"></i>
        <div className="budget">10</div>
      </a>
    </NavberEnd>
  </NavbarMenu>
 </Navbar>
)

export default Header