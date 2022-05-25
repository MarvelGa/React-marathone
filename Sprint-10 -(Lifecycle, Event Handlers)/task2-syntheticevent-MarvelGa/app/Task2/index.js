import React, {Component} from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''
        };
    }

    actions = (data) => {
        let foundedElement = this.state.list.find(elem => elem.id === Number(data.target.id));
        this.setState({...this.state, text: foundedElement.text});
    }
    leave = () => {
        this.setState({...this.state, text: ''})
    }

    render() {
        return (
           <div className='container'>
                {this.state.list.map(elem => {
                    return (
                        <div id={elem.id} key={elem.id} onMouseOver={this.actions} onMouseOut={this.leave} className='element'>
                            id - {elem.id}
                        </div>
                    );
                })}
                <div className='text'>{this.state.text}</div>
           </div>
        );
    }
}