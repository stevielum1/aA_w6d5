import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.setInput = this.setInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setInput(e) {
    const inputVal = e.currentTarget.value;
    this.setState( { inputVal } );
  }

  handleClick(e) {
    const inputVal = e.currentTarget.innerHTML;
    this.setState( { inputVal } );
  }

  render() {
    return (
      <div className="autocomplete-container">
        <h1>Autocomplete</h1>
        <div className="autocomplete-content">
          <input type="text" placeholder="Search..." value={this.state.inputVal} onInput={this.setInput}/>
          <ul>
            <ReactCSSTransitionGroup transitionName="autocomplete" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {
              this.props.names.map( (name, idx) => {
                if(name.toLowerCase().startsWith(this.state.inputVal.toLowerCase())) {
                  return (
                    <li key={idx} onClick={this.handleClick}>{name}</li>
                  )
                }
              })
            }
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  }
}

export default AutoComplete;
