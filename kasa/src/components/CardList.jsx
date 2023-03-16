import React from "react";
import "../styles/card.css"
import Card from './card';
 
export default function CardList({locations}) {
    return (
        <div className="ContainerCards">
            {locations.map(({ id, title, cover }) => 
               
                    <Card
                        key={id}
                        cover={cover}
                        title={title}
                    />
               
           )}
    </div>
)
}