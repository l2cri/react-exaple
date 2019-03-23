import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';
import Clock from './components/clock';

const App = (props) => {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7">
                <Form weatherMethod={props.gettingWeather} />
                <Weather {...props.weather} />
                <Clock />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default App;