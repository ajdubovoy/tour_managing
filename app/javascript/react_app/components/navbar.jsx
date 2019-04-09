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
`

const NavLinkStyled = styled(NavLink)`
  display: block;
  margin: 0 1rem;
  :hover {
    text-decoration: none;
  }
  &.selected {
    border-bottom: blue 0.1rem solid;
    padding-bottom: 0.2rem;
    padding-top: 0.3rem;
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
