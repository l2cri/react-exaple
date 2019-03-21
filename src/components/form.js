import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { city: 'Kiev' }
    }
    changeCity = (event) => {

        this.setState({ city: event.target.value });
    }
    render() {
        const { weatherMethod } = this.props;
        let { city } = this.state;
        return (
            <form onSubmit={weatherMethod}>
                <input
                    value={city}
                    onChange={this.changeCity}
                    type="text" name="city" placeholder="Город" />
                <button type="submit">Получить</button>
            </form>
        );
    }
}