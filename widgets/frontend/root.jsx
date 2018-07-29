import React from 'react';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';
import AutoComplete from './autocomplete';

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

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <div className="bottom-tabs">
          <Tab tabs={tabs} />
          <AutoComplete names={this.props.names}/>
        </div>
      </div>
    )
  }
}

export default Root;
