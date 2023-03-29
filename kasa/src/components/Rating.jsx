
import React from "react";
import starVide from "../asset/Vectorstar.png";

import starColor from "../asset/VectorStarColor.png";

import style from "../styles/rating.module.css"





const Rating = ({ RatingStar }) => {

    const fullStars = Array(5).fill(starColor);
    const Empty = Array(5).fill(starVide);
    return (
<div className={style.posRating}>
    { fullStars.slice(5 - RatingStar).map(( fullStar,index ) => {
        return (
         <div key={index } className={style.ratingStars}>
            <img  src={ fullStar} alt="" />
            </div>
        )
    
    })}
            
    { Empty.slice(RatingStar).map((Empty ,index )=> {
                  return (
                      <div key={index } className={style.ratingStars}>
            <img src={ Empty} alt="" />
            </div>
        )
    
    })}
</div>
)
};

export default Rating;