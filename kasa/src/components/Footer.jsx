import logoFooter  from '../logoFooter.png'
import "../styles/footer.css"
export default function Footer() {
    return(
        <div>
            <footer>
                <div className='pos-img'>
                    <img src={logoFooter} className="ks-footerLogo" alt="kasa" />
                </div> 
                <p className='txt-footer'>Ⓒ 2020 Kasa. All Rights reserved </p>
            </footer>
        
        </div>
    )
}