import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import OutlineButton from '../design_toolkit/outline_button';

const ContactShowContainer = styled.div`
padding: ${props => props.theme.spacing.xl};
list-style: none;
background: ${props => props.theme.colors.bgPrimary};
`;

const Name = styled.h1``;

const Venue = styled.p`
margin-bottom: ${props => props.theme.spacing.md};
`;

const Info = styled.ul`
list-style: none;
margin-top: ${props => props.theme.spacing.lg};
padding-inline-start: ${props => props.theme.spacing.none};
li{
  margin-bottom: ${props => props.theme.spacing.sm};
}
`;

const EditButton = styled.div`
position: absolute;
right: ${props => props.theme.spacing.lg};
bottom: ${props => props.theme.spacing.lg};
`;

class ContactShowPane extends Component {
  renderInfo = (info) => {
    return Object.keys(info).map((i) => {
      if (info[i]) {
        return (
          <li key={i}>
            <strong>{i}:</strong> {info[i]}
          </li>
        );
      }
    });
  }

  render() {
    const { contact } = this.props;

    if (Object.keys(contact).length > 0) {
      return (
        <ContactShowContainer>
          <Link to={`/contacts/${contact.id}/edit`}>
            <EditButton>
              <OutlineButton>
                <FontAwesomeIcon icon={faEdit} />
              </OutlineButton>
            </EditButton>
          </Link>
          <Link to={`/venues/${contact.venue.id}`}>
            <Venue>
              <OutlineButton uppercaseStyle>
                {contact.venue.name} <FontAwesomeIcon icon={faChevronRight} />
              </OutlineButton>
            </Venue>
          </Link>
          <Name>{contact.first_name} {contact.last_name}</Name>
          <Info>{this.renderInfo({
            email: contact.email,
            phone: contact.phone
          })}</Info>
        </ContactShowContainer>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(ContactShowPane);
