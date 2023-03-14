// import banniere from "../asset/photo-de-failse.png";
import "../styles/banner.css";
import styled from 'styled-components'
import colors from '../colors'

const OverlayTxt = styled.p`
    color: ${colors.secondary};
    text-decoration: none; 
`

export default function Banner() {
    return (
        <div className="ks-banner">
            <div className="overlay">
             </div>    
                     <OverlayTxt className="overlay-txt">Chez vous, partout et ailleurs </OverlayTxt>  
            
        </div>
    )
}




