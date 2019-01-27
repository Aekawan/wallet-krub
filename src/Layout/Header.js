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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  > a {
    background: #0984e3;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 3px 3px 20px 0px rgba(0,0,0,0.3);
  }
  > a:hover {
    background: #0984e3;
    color: #FFFFFF;
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
      <a className="button is-rounded">เข้าสู่ระบบ</a>
    </NavberEnd>
  </NavbarMenu>
 </Navbar>
)

export default Header