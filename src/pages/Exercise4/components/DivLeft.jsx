import React from 'react';
import DivTop from './DivTop';
import DivMiddle from './DivMiddle';
import DivBottom from './DivBottom';
import '../styles/style.css';

export default function DivLeft() {
    return <div className="divLeft">
        <DivTop />
        <DivMiddle />
        <DivBottom />
    </div>
}