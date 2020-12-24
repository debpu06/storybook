import React from 'react';
import './Icon.css';

export const Icon = ({ children, url, target, title, text, punk, path, ...rest }) => {

    const style = punk ? 'punk' : '';

    return (
        <a href={url} rel="noreferrer" target={target} title={title} {...rest}>
            <svg className={style} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={path} />
            </svg>
        </a>
    )
}