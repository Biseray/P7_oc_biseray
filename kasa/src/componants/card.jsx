
import "../styles/card.css"

export default function Card({title, cover}) {
  return (
      <div className="Card">
          <div className="cardOverlay"></div> 
      <img className="img-card" src={cover} alt={title} />
      <div className="CardTitle">
        {title}
      </div>
    </div>
  );
}

