import React from 'react';
import './Profile.css';

export const Profile = ({ children, alt, url, title, ...rest }) => {

    return (
        <img loading="eager" alt={alt} title={title} src={url}  {...rest}/>
    )
}