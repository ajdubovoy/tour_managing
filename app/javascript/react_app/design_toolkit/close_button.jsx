import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UnstyledLink from './unstyled_link';

const FaintButton = styled.div`
color: ${props => props.theme.colors.opposite};
border-radius: 50%;
background: ${props => props.theme.colors.bgTertiary};
display: flex;
margin: ${props => props.theme.spacing.md};
width: 1.5rem;
height: 1.5rem;
font-size: 0.8rem;
align-items: center;
justify-content: center;
top: ${props => props.theme.spacing.md};
left: ${props => props.theme.spacing.md};
${props => props.theme.media.greaterThan("sm")`
  display: none;
`}
&:hover{
  background: ${props => props.theme.colors.activeSecondary};
}
${props => props.theme.transitions.background};
`;

const CloseButton = (props) => {
  return(
    <Link to={props.to}>
    <FaintButton>
      <FontAwesomeIcon icon={faChevronLeft} />
    </FaintButton>
    </Link>
  );
};

export default CloseButton;

