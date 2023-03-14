import logo from '../logo.png';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css"
import styled from 'styled-components'
import colors from '../colors'

const StyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none; 
`

export default function Navigation() {
    return (
        <header className='pos-header'>
           <img src={logo} className="App-logo" alt="logo" />
            <nav className='ks-navbar'>
            <StyledLink to="/"> Accueil </StyledLink>
            <StyledLink to="/apropos"> A Propos </StyledLink>
            </nav>
        </header>
    )
}