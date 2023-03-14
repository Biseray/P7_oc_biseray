
import "../styles/card.css"
import styled from 'styled-components'
import colors from '../colors'

const TitleTxt = styled.div`
    color: ${colors.secondary};
    
`

export default function Card({ id, title, cover}) {
  return (
      <div className="Card" key={id} >
          <div className="cardOverlay"></div> 
      <img className="img-card" src={cover} alt={title} />
      <TitleTxt className="CardTitle">
        {title}
      </TitleTxt>
    </div>
  );
}

