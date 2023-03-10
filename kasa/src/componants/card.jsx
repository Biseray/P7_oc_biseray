
import "../styles/card.css"

export default function Card({ id, title, cover}) {
  return (
      <div className="Card" key={id} >
          <div className="cardOverlay"></div> 
      <img className="img-card" src={cover} alt={title} />
      <div className="CardTitle">
        {title}
      </div>
    </div>
  );
}

