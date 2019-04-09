import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';;

const NavbarContainer = styled.div`
  width: 100vw;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  display: flex;
  padding-top: 10px;
`

const NavLinkStyled = styled(NavLink)`
  display: block;
  margin: 0 1rem;
  &.active {
    color: red;
  }
`

const NavbarLink = (props) => {
  return(
    <NavLinkStyled
      activeClassName="active"
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
