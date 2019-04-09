import React from 'react';
import Navbar from './navbar';

const App = (props) => {
  return (
    <div id="app">
      <Navbar />
      <div id = "app-content">
        {props.children}
      </div>
    </div>
  );
};

export default App;
