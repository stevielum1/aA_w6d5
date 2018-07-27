import React from 'react';

const Header = ({tab, handleClick}) => {
  // debugger
  return (
    <li>
      <button onClick={handleClick}>{tab.title}</button>
    </li>
)};


export default Header;
