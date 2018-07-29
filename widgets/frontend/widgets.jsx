import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

const names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"];

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root names={names}/>, main);
});
