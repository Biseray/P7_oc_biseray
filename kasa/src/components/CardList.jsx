import React from "react";
import "../styles/card.css"
import Card from './card';
 import { Link } from "react-router-dom";
export default function CardList({locations}) {
    return (
        <div className="ContainerCards">
            {locations.map(({ id, title, cover }) => 
                <Link to={`fichedetail/${id}`} key={id}>
                    <Card
                        
                        cover={cover}
                        title={title}
                    />
                </Link> 
            )}
         
    </div>
)
}
