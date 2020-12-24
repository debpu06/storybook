import React from 'react';
import './Button.css';

export const Button = ({ children, primary, ...rest }) => {

    const style = primary ? 'punk-btn' : 'punk-btn btn--secondary';

    return (
        <button className={style} {...rest}>
            <div className="btn__content">{ children }</div>
            <span class="btn__glitch"></span>
            { primary ? <span class="btn__label">r25</span> : <></> }
        </button>
    )
}