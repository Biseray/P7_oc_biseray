import React from "react";
import "../styles/card.css";
import colors from "../styles/colors.module.css"

export default function Card({ id, title, cover}) {
  return (
    
      <div className="Card" key={id} >
          <div className="cardOverlay"></div> 
      <img className="img-card " src={cover} alt={title} />
      <h2 className={` CardTitle , ${colors.primary_Color} `} >
        {title}
      </h2>
    </div>
  );
}

