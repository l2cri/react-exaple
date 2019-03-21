import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';

const API_KEY = "bd5cbf4204b1112110372d63829c0697";

export default class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    if (data.cod === 200) {
      let date = new Date();
      date.setTime(data.sys.sunset * 1000);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
        error: ''
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: data.message
      });
    }
  }

  render() {

    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7">
                <Form weatherMethod={this.gettingWeather} />
                <Weather {...this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
