import React from "react";

import logo from '../logo.png';

import { Link } from "react-router-dom";
import "../styles/navigation.css";
import colors from "../styles/colors.module.css";


export default function Navigation() {
    return (
        <header className='pos-header'>
           <img src={logo} className="App-logo" alt="logo" />
            <nav className={`ks-navbar, ${colors.secondary_Color}`}>
            <Link  to="/" className={colors.secondary_Color}> Accueil </Link>
            <Link to="/apropos" className={colors.secondary_Color}> A Propos </Link>
            </nav>
        </header>
    )
}