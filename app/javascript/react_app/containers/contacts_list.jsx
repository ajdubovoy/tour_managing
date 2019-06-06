import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadContacts } from '../actions';

import ContactsListItem from '../components/contacts_list_item';

const ContactsListContainer = styled.ul`
width: 100%;
height: 100%;
padding: 0;
list-style: none;
`;

class ContactsList extends Component {
  componentDidMount() {
    this.props.loadContacts();
  }

  renderContacts = () => {
    if (!this.props.contacts) {
      return [];
    }

    return this.props.contacts.map(c => <ContactsListItem contact={c} key={c.id} selected={this.props.contact} />)
  }

  render() {
    return (
      <ContactsListContainer>
        {this.renderContacts()}
      </ContactsListContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadContacts },
    dispatch
  );
}

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts,
    contact: state.contact
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
