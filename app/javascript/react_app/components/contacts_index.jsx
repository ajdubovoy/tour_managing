import React from 'react';
import PageContainer from '../design_toolkit/page_container';
import LeftBar from '../design_toolkit/left_bar';
import RightBar from '../design_toolkit/right_bar';
import ContactsList from '../containers/contacts_list';

const ContactsIndex = (props) => {
  return (
    <PageContainer>
      <LeftBar>
        <ContactsList />
      </LeftBar>
      <RightBar>
      </RightBar>
    </PageContainer>
  );
};

export default ContactsIndex;
