import React from 'react';

const Header = ({tab, handleClick}) => {
  return (
    <li onClick={handleClick}>{tab.title}</li>
)};


export default Header;
