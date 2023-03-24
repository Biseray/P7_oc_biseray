import React from "react";
import style from "../styles/carousel.module.css"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const  SliderShow = ({ allPictures }) =>  {
    
  
    
    return (
        <div className="container">

            <div className={style.containerCarousel}>
                  
                

                <div className={style.posFleche}> 


                    <div className={style.flecheLeft}>
                        <FontAwesomeIcon className={style.fleche} icon={faAngleLeft} />
                    </div>
                    <div>
                        <FontAwesomeIcon className={style.fleche} icon={faAngleRight} />
                    </div>
                    
                </div>

















                    {allPictures.map((pictures, index) => (


                        <div className={style.ImgCarousel} >
                            <button >

                            </button>
                            <img className={style.posCarousel} src={pictures} alt="" key={index} />

                        </div>


                    ))}
           
            </div>
            <button className={style.button} >
                            
                            </button>
        </div>
    )



 



}

export default SliderShow;