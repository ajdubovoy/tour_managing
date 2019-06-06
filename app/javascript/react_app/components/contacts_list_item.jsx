import React from 'react';
import styled from 'styled-components';
import UnstyledLink from '../design_toolkit/unstyled_link';

const ContactsListItemElement = styled.li`
background: ${props => props.selected ? props.theme.colors.bgPrimary : props.theme.colors.bgSecondary};
padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
${props => props.theme.borders.bottom};
`;

const Name = styled.h3`
margin: ${props => props.theme.spacing.none};
`;

const Venue = styled.p`
text-transform: uppercase;
font-weight: 200;
letter-spacing: 0.15rem;
font-size: 0.8rem;
margin: 0;
`;

const ContactsListItem = ({ contact, selected, handleClick }) => {
  return(
    <UnstyledLink to={`/contacts/${contact.id}`}>
      <ContactsListItemElement selected={contact.id === selected.id}>
        <Venue>{contact.venue.name}</Venue>
        <Name>{contact.first_name} <strong>{contact.last_name}</strong></Name>
      </ContactsListItemElement>
    </UnstyledLink>
  );
}

export default ContactsListItem;
