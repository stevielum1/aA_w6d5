import React from 'react';
import Clock from './clock';
import Tab from './tab';

const tabs = [
  {
    title: "one",
    content: "I am the first"
  },
  {
    title: "two",
    content: "Second pane here"
  },
  {
    title: "three",
    content: "Third pane here"
  }
];

const Root = () => (
  <div>
    <Clock />
    <div className="bottom-tabs">
      <Tab tabs={tabs} />
    </div>
  </div>
);

export default Root;
