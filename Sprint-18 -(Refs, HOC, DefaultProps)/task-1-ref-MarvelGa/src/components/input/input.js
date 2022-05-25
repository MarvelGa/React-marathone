import React, {Component} from 'react';

import './input.css';

const allOperators = [
    {cell_operator: "Kyivstar", codes: [67, 68, 96, 97, 98]},
    {cell_operator: "Vodafone", codes: [50, 66, 95, 99]},
    {cell_operator: "Lifecell", codes: [63, 73, 93]},
    {cell_operator: "3mob", codes: [91]},
    {cell_operator: "People.net", codes: [92]},
    {cell_operator: "intertelecom", codes: [89, 94]}
]

function checkCode(operatorCode, inputData) {
    let result = operatorCode.find((e) => e == parseInt(inputData));
    return typeof result === "undefined" ? false : true;
}

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstInput: "",
            secondInput: "",
            operator: "",
            sign: ""
        }
        this.firstInputReference = React.createRef()
        this.secondInputReference = React.createRef()
        this.handleChangeForFirstInput = this.handleChangeForFirstInput.bind(this);
        this.handleChangeForSecondInput = this.handleChangeForSecondInput.bind(this);
    }

    componentDidMount() {
        this.firstInputReference.current.focus();
    }

    handleChangeForFirstInput(e) {
        let operatorNotFound = true;
        if (e.target.name === "firstInput") {
            let value = this.firstInputReference.current.value.replace(/\D+/g, '');
            this.setState({firstInput: value});
            if (/[0-9]{2}/.test(value)) {
                for (let i of allOperators) {
                    if (checkCode(i.codes, value)) {
                        this.setState({operator: i.cell_operator});
                        operatorNotFound = false;
                    }
                }
                if (operatorNotFound) {
                    this.setState({operator: "Unknown"});
                }
                this.secondInputReference.current.focus()
            } else {
                this.setState({operator: ""});
            }
        }
    }

    handleChangeForSecondInput(e) {
        if (e.target.name === "secondInput") {
            let value = this.secondInputReference.current.value.replace(/\D+/g, '');
            this.setState({secondInput: value});
            if (this.state.operator.length > 0) {
                if (/[0-9]{7}/.test(value)) {
                    this.setState({sign: "✔️"});
                } else {
                    this.setState({sign: " - "});
                }
            } else {
                this.setState({sign: " - "});
            }
        }
    }

    render() {
        let error = this.state.error ? <p> Only numbers! Please Try again.</p> : null;
        return <div>
            <span data-testid="operator-name">{this.state.operator}</span>
            <span>+38 0</span>
            <input
                type="text"
                name="firstInput"
                data-testid="operator-input"
                value={this.state.firstInput}
                onInput={this.handleChangeForFirstInput}
                ref={this.firstInputReference}
            />

            <span data-testid="check-icon">{this.state.sign}</span>
            <input type="text"
                   data-testid="phone-input"
                   name="secondInput"
                   value={this.state.secondInput}
                   onInput={this.handleChangeForSecondInput}
                   ref={this.secondInputReference}
            />
        </div>;
    }
}