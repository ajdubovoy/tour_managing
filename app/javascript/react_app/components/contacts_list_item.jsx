import React from 'react';
import styled from 'styled-components';

const ContactsListItemElement = styled.li`
background: white;
padding: ${props => props.theme.spacing.md};
cursor: pointer;
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

const ContactsListItem = ({ contact }) => {
  return(
    <ContactsListItemElement onClick={() => this.props.handleClick(contact)}>
      <Venue>{contact.venue.name}</Venue>
      <Name>{contact.first_name} <strong>{contact.last_name}</strong></Name>
    </ContactsListItemElement>
  );
}

export default ContactsListItem;
