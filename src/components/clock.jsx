import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { date: new Date(), name: 'Tom' }
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h3>Hello {this.state.name}</h3>
                <div>Time is now {this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}