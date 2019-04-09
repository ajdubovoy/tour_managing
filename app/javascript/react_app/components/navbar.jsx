import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';;

const NavbarContainer = styled.div`
  width: 100vw;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 4px 0 rgba(0,0,0,0.08);
  background-color: white;
`

const NavLinkStyled = styled(NavLink)`
  display: block;
  margin: 0 1rem;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.15rem;
  :hover {
    text-decoration: none;
  }
  &.selected {
    border-bottom: ${props => props.theme.main} 0.01rem solid;
    padding-bottom: 0.2rem;
    padding-top: 0.21rem;
    :hover {
      border-bottom: #025ac1 0.01rem solid;
    }
  }
`

const NavbarLink = (props) => {
  return(
    <NavLinkStyled
      activeClassName="selected"
      {...props}
    >
      {props.children}
    </NavLinkStyled>
  );
}

const Navbar = (props) => {
  return(
    <NavbarContainer>
      <NavbarLink exact to="/">Tours</NavbarLink>
      <NavbarLink to="/contacts">Contacts</NavbarLink>
      <NavbarLink to="/venues">Venues</NavbarLink>
    </NavbarContainer>
  );
}

export default Navbar;
