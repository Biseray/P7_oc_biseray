
import React from "react";
import starVide from "../asset/Vectorstar.png";

import starColor from "../asset/VectorStarColor.png";

import style from "../styles/rating.module.css"





const Rating = ({ RatingStar }) => {

    const fullStars = Array(5).fill(starColor);
    const Empty = Array(5).fill(starVide);
    return (
<div className={style.posRating}>
    { fullStars.slice(5 - RatingStar).map(fullStar => {
        return (
            <img src={ fullStar} alt="" />
            
        )
    
    })}
              { Empty.slice(RatingStar).map(Empty => {
                  return (
            <div className={style.ratingStars}>
            <img src={ Empty} alt="" />
            </div>
        )
    
    })}
</div>
)
};

export default Rating;