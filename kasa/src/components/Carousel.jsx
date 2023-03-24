import React from "react";
import style from "../styles/carousel.module.css"

export default function Carousel({ pictures, index}) {
    <div className={style.containerCarousel}>
        <div  >
            <img  className={style.posCarousel} src={pictures} alt="" key={index}/>
        </div>
    </div>


}