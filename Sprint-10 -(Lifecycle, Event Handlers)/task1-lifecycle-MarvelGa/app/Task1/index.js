import React, {Component} from "react";

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/list')
            .then(response => response.json())
            .then(result => this.setState({list: result}));
    }

    render() {

        const styleElem = {
            border: '1px solid black'
        };

        if (this.state.list) {
            return (
                this.state.list.map(elem => {
                    return (
                        <div style={styleElem} key={elem.id}>
                            id - {elem.id}
                            <br></br>
                            name - {elem.name}
                            <br></br>
                            note - {elem.note}
                        </div>
                    );
                })
            );
        }
        return (
            <>
                Loading...
            </>
        );
    }
}
