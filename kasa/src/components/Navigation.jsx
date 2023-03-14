import logo from '../logo.png';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css"


// const StyledLink = styled(Link)`
//     color:${colors.primary}`


export default function Navigation() {
    return (
        <header className='pos-header'>
           <img src={logo} className="App-logo" alt="logo" />
            <nav className='ks-navbar'>
            <Link to="/"> Accueil </Link>
            <Link to="/apropos"> A Propos </Link>
            </nav>
        </header>
    )
}