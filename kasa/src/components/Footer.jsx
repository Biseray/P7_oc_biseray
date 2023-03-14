import logoFooter  from '../logoFooter.png'
import "../styles/footer.css"
import styled from 'styled-components'
import colors from '../colors'

const FooterText = styled.p`
    color: ${colors.secondary};
    text-decoration: none; 
`


export default function Footer() {
    return(
        <div>
            <footer>
                <div className='pos-img'>
                    <img src={logoFooter} className="ks-footerLogo" alt="kasa" />
                </div> 
                <FooterText className='txt-footer'>Ⓒ 2020 Kasa. All Rights reserved </FooterText>
            </footer>
        
        </div>
    )
}