import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()

    };
  }

  _tick() {
    this.setState( {date: new Date()});
  }

  componentDidMount(){
    this.interval = setInterval(this._tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // const hours = this.state.date.getUTCHours();
    // const minutes = this.state.date.getUTCMinutes();
    // const seconds = this.state.date.getUTCSeconds();
    const date = this.state.date.toDateString();
    const time = this.state.date.toLocaleTimeString() + " PDT";

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <div className="clock-time">
            <h2>Time:</h2>
            <h2>{time}</h2>
          </div>
          <div className="clock-time">
            <h2>Date:</h2>
            <h2>{date}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
