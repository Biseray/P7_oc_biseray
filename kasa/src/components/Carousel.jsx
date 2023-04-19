import React from "react";
import { useState } from "react";
import style from "../styles/carousel.module.css"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Carousel({ allPictures }) {
    const [picturesIndex, setPicturesIndex] = useState(0)

//click retour 
    const handlePrevClick = () => {
        let prevIndex = picturesIndex -1;
        if (picturesIndex === 0) {
            prevIndex = allPictures.length -1;

        }
        setPicturesIndex(prevIndex);
    }


//click suivant 
    const handleNextClick = () => {

        let nextIndex = picturesIndex + 1;
        if (nextIndex > allPictures.length -1 ) {
            nextIndex = 0

        }; setPicturesIndex(nextIndex)
    }

    //selection d'une image précise 
    const handleSelectClick = (index) => {
        setPicturesIndex(index)
    }

    return (
        <div className={style.containerCarousel}>
            <img src={allPictures[picturesIndex]} alt="" className={` ${style.posCarousel}  `} />
            <div className={`${style.posFleche} ${allPictures.length === 1 ? style.active : ""}`}>
                <div className={style.flecheLeft}>
                    <FontAwesomeIcon className={style.fleche} icon={faAngleLeft} onClick={handlePrevClick} />
                </div>
                <div>
                    <FontAwesomeIcon className={style.fleche} icon={faAngleRight} onClick={handleNextClick} />
                </div>

            </div>
            
            <div className={style.ImgCarousel}>
                <div className={`${style.dotPos}`}>
                    {allPictures.map((picture, index) => (
                        <div className={`${style.dot} ${index === picturesIndex ? style.active : ""} ${allPictures.length > 1 ? style.style : style.dotNot}`} key={picture} onClick={() => handleSelectClick(index)}  ></div>
                    ))}
                </div>
                <span className={style.numberSlide}> {picturesIndex + 1}/ {allPictures.length} </span>
               
            </div>
        </div>
    )

}

