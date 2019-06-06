import React from 'react';
import PageContainer from './page_container';
import LeftBar from './left_bar';
import RightBar from './right_bar';
import ContactsList from '../containers/contacts_list';
import ContactShow from '../containers/contact_show';

const ContactsIndex = (props) => {
  return (
    <PageContainer>
      <LeftBar>
        <ContactsList />
      </LeftBar>
      <RightBar>
        <ContactShow />
      </RightBar>
    </PageContainer>
  );
};

export default ContactsIndex;
