import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import style from "../styles/BoxInfo.module.css"
import { useState } from "react";

export default function EquipementBox({ id, title, equipements }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.box} key={id}>
            <div className={style.titleBoxInfo}>
                <h3 className={style.title}>{title}</h3>
                <FontAwesomeIcon
                    className={style.btn}  icon={isOpen ? faAngleUp : faAngleDown} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            {isOpen  && (
                <div className={style.descriptionBoxInfo}>
                    <ul className={style.ulStyle}>
                        {equipements.map((equipement, index) => (
                            
                                <li key={index}>
                                {equipement} 
                                </li>
                         
                        ))}
                       </ul>
                </div>
            )}
        </div>
    );
} 
