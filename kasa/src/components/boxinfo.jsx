import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import style from "../styles/BoxInfo.module.css";
import { useState } from "react";

export default function BoxInfo({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.box}>
      <div className={style.titleBoxInfo}>
        <h3 className={style.title}>{title}</h3>
        <FontAwesomeIcon className={style.btn} icon={isOpen ? faAngleUp : faAngleDown} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className={style.descriptionBoxInfo}>
         <div className={style.description}>{description}</div> 
        </div>
      )}
    </div>
  );
}



