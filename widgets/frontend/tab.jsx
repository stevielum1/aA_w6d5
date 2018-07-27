import React from 'react';
import Header from './header';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.setTab = this.setTab.bind(this);
  }

  setTab(idx) {
    // debugger
    this.setState({ index: idx });
  }

  render() {
    return (

      <div className="tabs">
        <h1>Tabs</h1>
        <div className="tabs-container">

          <div className="tabs-headers">
            <ul>

            {
              this.props.tabs.map ( (tab, idx) => (

                <Header tab={tab} key={idx} handleClick={ () => this.setTab(idx)} />
              ))
            }
            </ul>
          </div>

          <div className="tabs-content">
            <p>
              {this.props.tabs[this.state.index].content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
