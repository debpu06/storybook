import React from 'react';
import './Logo.css';

export const Logo = ({ children, punk, ...rest }) => {

    const style = punk ? 'punk' : '';

    return (
        <pre className={style} {...rest}>
<br />      _      _                  ___    __  
<br />     | |    | |                / _ \  / /  
<br />   __| | ___| |__  _ __  _   _| | | |/ /_  
<br />  / _` |/ _ \ '_ \| '_ \| | | | | | | '_ \  
<br /> | (_| |  __/ |_) | |_) | |_| | |_| | (_) |  
<br />  \__,_|\___|_.__/| .__/ \__,_|\___/ \___/  
<br />                  | |  
<br />                  |_|  
<br />  
        </pre>
    )
}