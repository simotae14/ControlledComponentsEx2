import React from 'react';

const Header = (props) => (
  <header className="App-header">
  	<img src={props.logo} className="App-logo" alt="logo" />
  	<h1 className="App-title">ReactND - Coding Practice</h1>
  </header>
);

export default Header;