import React from 'react';
import styled from 'styled-components'
import { Row, Col, NavDropdown } from 'react-bootstrap'

const Logo = styled.img`
`

const Menu = styled.div`
  display: inline-flex;
  margin-left: auto;
  margin-right: 76px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = styled(Row)`
  margin-top: 24px;
  padding: 0 81px;

  @media (max-width: 768px) {
    padding: 0 21px;
  }
`

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
  &:not(&:last-child) {
    margin: 0px 36px;
  }
  &:last-child {
    margin-left: 36px;
  }
  &:first-child {
    color: #181949;
    font-weight: 700;
    img {
      margin-right: 5px;
    }
  }
`

const NavbarWrapper = styled(NavDropdown)`
  display: none;
  .dropdown-toggle {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`
const Footer = () => {
  return (
    <Header>
      <HeaderCol>
        <Logo src="images/logo.svg" alt="DaouKiwoom" data-testid="logo"></Logo>
        <Menu>
          <MenuItem><img alt="" src="images/icons/home-icon.svg" />Home</MenuItem>
          <MenuItem>Auto Homepage</MenuItem>
          <MenuItem>Sales</MenuItem>
          <MenuItem>CRM</MenuItem>
          <MenuItem>Electronic office</MenuItem>
          <MenuItem>Cloud ERP</MenuItem>
          <MenuItem>SSL</MenuItem>
        </Menu>

        <NavbarWrapper title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item>Home</NavDropdown.Item>
          <NavDropdown.Item>Auto Homepage</NavDropdown.Item>
          <NavDropdown.Item>Sales</NavDropdown.Item>
          <NavDropdown.Item>CRM</NavDropdown.Item>
          <NavDropdown.Item>Electronic office</NavDropdown.Item>
          <NavDropdown.Item>Cloud ERP</NavDropdown.Item>
          <NavDropdown.Item>SSL</NavDropdown.Item>
        </NavbarWrapper>

      </HeaderCol>
    </Header>
  );
}

export default Footer
