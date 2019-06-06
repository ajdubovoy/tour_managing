import React from 'react';
import PageContainer from './page_container';
import LeftBar from './left_bar';
import RightBar from './right_bar';

const ContactsIndex = (props) => {
  return (
    <PageContainer>
      <LeftBar></LeftBar>
      <RightBar></RightBar>
    </PageContainer>
  );
};

export default ContactsIndex;
