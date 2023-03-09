import logo from '../logo.png';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"

export default function Navbar() {
    return (
        <header className='pos-header'>
           <img src={logo} className="App-logo" alt="logo" />
            <nav className='ks-navbar'>
            <Link to="/"> Accueil </Link>
            <Link to="/apropos"> a propos </Link>
            </nav>
        </header>
    )
}