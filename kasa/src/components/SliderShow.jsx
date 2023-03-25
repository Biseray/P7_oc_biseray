import React, { useState } from "react";
import style from "../styles/carousel.module.css"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const  SliderShow = ({ allPictures }) =>  {
    
    const [picturesIndex, setPicturesIndex] = useState(0);
    
    const handlePrevClick = () => {
        setPicturesIndex((picturesIndex - 1 + allPictures.length) % allPictures.length);
    }

      const handleNextClick = () => {
    setPicturesIndex((picturesIndex + 1) % allPictures.length);
  };

    return (
        <div className="container">

            <div className={style.containerCarousel}>
                  
                

                <div className={style.posFleche}> 


                    <div className={style.flecheLeft}>
                        <FontAwesomeIcon className={style.fleche} icon={faAngleLeft} onClick={handlePrevClick} />
                    </div>
                    <div>
                        <FontAwesomeIcon className={style.fleche} icon={faAngleRight} onClick={handleNextClick} />
                    </div>
                    
                </div>

                        <div className={style.ImgCarousel} >
                         
                            <img className={style.posCarousel} src={allPictures[picturesIndex]} alt=""  />
                                <div  className={style.numberSlide}>
                    {picturesIndex + 1 }/ {allPictures.length}
                    </div>
                        </div>

                
           
            </div>                        
                           
        </div>
    )



 



}

export default SliderShow;