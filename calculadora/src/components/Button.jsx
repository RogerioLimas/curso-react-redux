import React from 'react'
import './Button.css';

const Button = (props) => {
    const { click, label } = props;
    
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    return (
        <button
            className={classes}
            onClick={(e) => click(label)}
        >
        {props.label}
        </button>
    )
}

export default Button;
