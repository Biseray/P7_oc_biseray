
import React from "react";
import "../../styles/apropos.css"

import BannerBackground from "../../asset/photo-de-montagne.png";
import Banner from "../../components/Banner";
import BoxInfo from "../../components/boxinfo";

export default function APropos() {
  return (
    <div className="apropos">
   
  
      <Banner img={BannerBackground} title='' />
      <div className="posBoxInfo">
        <BoxInfo />
        <BoxInfo />
      </div>

    </div>
  );
}


