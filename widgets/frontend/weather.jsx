import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "loading weather...",
      degrees: ""
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.fetchWeather(pos);
    });
  }

  fetchWeather(pos) {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if(xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const location = response.name;
          const degrees = response.main.temp;
          this.setState( {location, degrees: degrees + "˚F"} );
        } else {
          alert("fetch weather failed");
        }
      }
    }

    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?APPID=600499787080143e42dfe208ccfed7d2&lat=${lat}&lon=${long}&units=imperial`);
    xhr.send();
  }

  render() {
    return (
      <div className="weather-container">
        <h1>Weather</h1>
        <div className="weather-content">
          <h2 className="weather-location">
            {this.state.location}
          </h2>
          <h2 className="weather-degrees">
            {this.state.degrees}
          </h2>
        </div>
      </div>
    )
  }
}

export default Weather;
