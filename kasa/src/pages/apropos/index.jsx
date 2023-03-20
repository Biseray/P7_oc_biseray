
import React from "react";
import "../../styles/apropos.css"

import BannerBackground from "../../asset/photo-de-montagne.png";
import Banner from "../../components/Banner";
import BoxListApropos from "../../components/BoxListApropos";
import { useLoaderData } from "react-router";
import kasaInfos from "../../datas/kasaInfo.js";


export default function APropos() {
  const InfoApopros = useLoaderData();
  return (
    <div className="apropos">
      <div className="BoxBanner">
        <Banner img={BannerBackground} title='' />
      </div>



      <div className="posBoxInfo">
        <BoxListApropos InfoApopros={InfoApopros} />

      </div>

    </div>
  );
}

export function kasaInfo() {
  return kasaInfos;
};
