import React from "react";
import "../../index.css"
import { Link } from "react-router-dom";
import "../../styles/error404.css";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import colors from "../../styles/colors.module.css"
export default function error404() {
  return (
    <>
      <Navigation />
      <div className="tete">
        <main>
          <div className="pos-error"> 
            <div className="Txt404">404</div>
            <div className="txtError" > Oups! La page que vous demandez n'existe pas </div>
            <Link to="/" className={colors.secondary_Color}>Retourner sur la page d'accueil</Link>
          </div>
        </main>
      </div>
      <Footer />


    </>

  );
}


