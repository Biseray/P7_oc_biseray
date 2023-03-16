import React from "react";

import style from "../styles/Banner.module.css";
import colors from "../styles/colors.module.css";




export default function Banner({img,title}) {
    return (
        <div className={style.ks_banner}>
            
               
                <div className="img">
                     <img className={style.img} src={img} alt="" />
                </div>
            <div className={style.overlay}>  
                <h1 className={colors.primary_Color}> {title}</h1>  
            </div>   
        </div>
    )
}




