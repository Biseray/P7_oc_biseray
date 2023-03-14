import { Link } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../colors'
import "../../styles/error404.css"

const StyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: underline; 
    font-size: 20px;
    padding-bottom: 2em;  
`
const StyledTxt = styled.div`
    color: ${colors.primary};
    text-decoration: none; 
    font-size: 40px;
    padding: 0em  0em 4em 0em;
`
const StyledTxt404 = styled.div`
    color: ${colors.primary};
    text-decoration: none;
    font-size: 12em
`

const StyledPos = styled.div`
    color: ${colors.primary};
    padding: 2em; 
    margin-bottom:4em  
`



export default function error404() {
  return (
   

      <main>
        <StyledPos>
           <StyledTxt404>404</StyledTxt404>
            <StyledTxt > Oups! La page que vous demandez n'existe pas </StyledTxt>
        </StyledPos>
        
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </main>
    
  
  );
}


