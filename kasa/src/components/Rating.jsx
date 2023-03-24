
import React from "react";
import starVide from "../asset/Vectorstar.png";

import starColor from "../asset/VectorStarColor.png";

import style from "../styles/rating.module.css"

const Rating = ({ RatingStar }) => {
    const limiteStar= Array(5);
    const Star = limiteStar.fill( <img src={starColor} alt='e'/>  )
    const vide = limiteStar.fill(<img src={starVide} alt='e'/>)

    return (
    <div className={style.posRating}>
    {Star.slice(5-RatingStar).map((Star, index) => {
        return(<p key={index}> {Star} </p>)
    })}
            {vide.slice(RatingStar).map((vide, index) => {
        return(<p key={index}> {vide} </p>)
    })}
    </div>
  )
};

export default Rating;