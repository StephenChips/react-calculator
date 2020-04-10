import React, { Component } from 'react'
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {
    state = {
        selectedOperator: null,
        storedValue: 0,
        displayedValue: 0
    };
    render = () => (
        <div className="calculator-container">
            <Display displayedValue={this.state.displayedValue}/>
            <Keypad />
        </div>
    )
}

export default Calculator;