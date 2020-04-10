import React from 'react';

import './Keypad.css';

const none = () => {};

/**
 * 第一种，测试事件
 * 第二种：测试整个渲染出来的JSX（JSX中包含了事件的定义）
 */

const Keypad = ({ onClickKey = none }) => {

    const numberText = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'CE' ];
    const operatorText = [ '+', '-', '*', '/' ];

    const numberKeys = numberText.map(text => (
        <div key={text} className="key number-key" onClick={e => onClickKey(text)}>{text}</div>
    ));

    const operatorKeys = operatorText.map(text => (
        <div key={text} className="key operator-key" onClick={e => onClickKey(text)}>{text}</div>
    ));

    return (
        <div className="keypad-container">
            <div style={{ display: 'flex' }}>
                <div className="number-pad">
                    {numberKeys}
                </div>
                <div className="operator-pad">
                    {operatorKeys}
                </div>
            </div>
            <div className="key submit-key" onClick={e => onClickKey('=')}>=</div>
        </div>
    )
};

export default Keypad;