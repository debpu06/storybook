import React from 'react';
import './Header.css';

export const Header = ({ children, primary, punk, ...rest }) => {

    let style = primary ? 'primary' : 'secondary';
    style = punk ? style + ' punk' : style;

    return (
        <h2 className={style} {...rest}>
            { children }
        </h2>
    )
}