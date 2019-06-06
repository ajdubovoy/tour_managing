import React from 'react';
import PageContainer from './page_container';
import LeftBar from './left_bar';
import RightBar from './right_bar';
import ContactsList from '../containers/contacts_list';

const ContactsIndex = (props) => {
  return (
    <PageContainer>
      <LeftBar>
        <ContactsList />
      </LeftBar>
      <RightBar></RightBar>
    </PageContainer>
  );
};

export default ContactsIndex;
