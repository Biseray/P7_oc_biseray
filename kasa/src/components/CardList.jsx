import  locationList  from '../datas/logements.js'
import "../styles/card.css"
import Card from './card'
 
export default function CardList() {
    return (
        <div className="ContainerCards">
            {locationList.map(({ id, title, cover }) => 
               
                    <Card
                        key={id}
                        cover={cover}
                        title={title}
                    />
               
           )}
    </div>
)
}