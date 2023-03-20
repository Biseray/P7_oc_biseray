
import React from "react";
import star from "../asset/Vectorstar.png";
import "../styles/rating.css";
import starColor from "../asset/VectorStarColor.png";

const Rating = ({hostRate}) => {
    //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles


    const fullStars = Array(5).fill(<img src={starColor} alt='Full star' className='redStar'/>)
    const emptyStars = Array(5).fill(<img src={star} alt='Empty Star' className='greyStar'/>)
    return (
            <div className='ratingStars'>
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                return (<p key={index}>{emptyStar}</p>)
                })}
            </div>
    );
};

export default Rating;