import React from "react";
import logoFooter from '../logoFooter.png'
import "../styles/footer.css";
// import styled from 'styled-components'
import colors from "../styles/colors.module.css";



export default function Footer() {
    return(
        <div>
            <footer>
                <div className='pos-img'>
                    <img src={logoFooter} className="ks-footerLogo" alt="kasa" />
                </div> 
                <p className={colors.primary_Color}>Ⓒ 2020 Kasa. All Rights reserved </p>
            </footer>
        
        </div>
    )
}