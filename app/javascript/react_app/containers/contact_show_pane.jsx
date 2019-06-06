import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ContactShowContainer = styled.div`
width: 100%;
height: 100%;
padding: ${props => props.theme.spacing.lg};
list-style: none;
background: ${props => props.theme.colors.bgPrimary};
`;

const Name = styled.h1``;

const Venue = styled.p``;

const Info = styled.ul`
list-style: none;
margin-top: ${props => props.theme.spacing.lg};
padding-inline-start: ${props => props.theme.spacing.none};
li{
  margin-bottom: ${props => props.theme.spacing.sm};
}
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
          <Name>{contact.first_name} {contact.last_name}</Name>
          <Info>{this.renderInfo({
            email: contact.email,
            phone: contact.phone
          })}</Info>
        <Venue>{contact.venue.name}</Venue>
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
