import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageContainer from '../design_toolkit/page_container';
import LeftBar from '../design_toolkit/left_bar';
import RightBar from '../design_toolkit/right_bar';
import ContactsList from '../containers/contacts_list';
import ContactShowPane from '../containers/contact_show_pane';

import { loadContact } from '../actions';

class ContactsShow extends Component {
  componentDidMount() {
    this.props.loadContact(this.props.idFromUrl);
  }

  componentDidUpdate(prevProps) {
    if (this.props.idFromUrl !== prevProps.idFromUrl) {
      this.props.loadContact(this.props.idFromUrl);
    }
  }

  render() {
    return (
      <PageContainer>
      <LeftBar>
        <ContactsList />
      </LeftBar>
      <RightBar>
        <ContactShowPane />
      </RightBar>
      </PageContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadContact },
    dispatch
  );
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return {
    idFromUrl: idFromUrl,
    contacts: state.contacts,
    contact: state.contact
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsShow);
