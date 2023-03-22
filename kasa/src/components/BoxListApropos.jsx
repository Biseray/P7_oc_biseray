import React from "react";

import BoxInfo from './BoxInfo';
import style from '../styles/BoxInfo.module.css'
 
export default function boxInfoList({InfoApopros}) {
    return (
        <div className={style.posBoxInfo}>
            {InfoApopros.map(({ id, title, description }) => 
               
                    <BoxInfo
                        
                    key={id} 
                    title={title}
                    description={description}
                    />
               
           )}
    </div>
)
}

