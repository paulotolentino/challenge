import React from 'react';
import Logo from '../img/LOGO.svg'
import Input from './Input';
import '../styles/style.css';

export default function Navbar() {
    return <nav>
        <img src={Logo} alt="logo"/>
        <Input />
    </nav>
}