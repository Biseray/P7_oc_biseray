import React from "react";
// import FontAwesomeIcon from "https://kit.fontawesome.com/4bd8063d4c.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown} from '@fortawesome/free-solid-svg-icons'
import style from "../styles/BoxInfo.module.css"

export default function BoxInfo({ id, title, description }) {
    

    return (
        <div className={style.box} key={id}>
            <div className={style.titleBoxInfo}> <h3 className={ style.title}> {title} </h3> <FontAwesomeIcon className={style.btn} icon={faAngleDown} /> </div>
            <div className={style.descriptionBoxInfo}> <p className={style.description}>{description}</p> 
             
            </div>
        </div>
    )
}
