// import banniere from "../asset/photo-de-failse.png";
import style from "../styles/Banner.module.css";




export default function Banner({img,title}) {
    return (
        <div className={style.ks_banner}>
            <div className={style.orvelay}>
                <img src={img} alt="" />
             </div>    
            <h1 className={style.overlay_txt}> {title}</h1>  
            
        </div>
    )
}




