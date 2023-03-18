import React from "react";
import style from "../../src/styles/tag.module.css"


export default function tagBox({ tags }) {
    return (
        <div className={style.NameTag}>
            
                {tags.map((tag, index) => (
                    <p  className={style.tag} key={index}>
                        {tag} 
                    </p>
                ))}
            
        </div>
    )
}
