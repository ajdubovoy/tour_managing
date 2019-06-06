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

const Info = styled.div``;

class ContactShow extends Component {
  renderInfo = (info) => {
    return Object.keys(info).map((i) => {
      if (info[i]) {
        return (
          <p key={i}>
            <strong>{i}:</strong> {info[i]}
          </p>
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
            Email: contact.email,
            Phone: contact.phone
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

export default connect(mapStateToProps)(ContactShow);
