import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Clock from './clock';

// class Widgets extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//
// }

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
});
