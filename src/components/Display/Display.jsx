import React from 'react'

import './Display.css';

const Display = ({ displayedValue }) => (
    <div className="display-container">
        <div className="display-value-container">{displayedValue}</div>
    </div>
);

export default Display;