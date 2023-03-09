import  locationList  from '../datas/logements.js'
import "../styles/card.css"
import Card from './card'
 
export default function CardList() {
    return (
        <div className="ContainerCards">
            {locationList.map(({ id, title, cover }) => 
                <div key={id}>
                    <Card
                        cover={cover}
                        title={title}
                    />
                </div> 
           )}
    </div>
)
}