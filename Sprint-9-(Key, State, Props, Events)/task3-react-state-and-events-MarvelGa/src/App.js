import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appData: `React Marathon`}
    }

    render() {
        return (
            <div onClick={() => this.setState({appData: this.state.appData.toLowerCase()})}> {this.state.appData}</div>
        )
    }
}
