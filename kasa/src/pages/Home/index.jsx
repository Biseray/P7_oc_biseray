import React from "react";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import BannerBackground from "../../asset/photo-de-failse.png";
import { useLoaderData } from "react-router";
import locationList from '../../datas/logements.js';
import "../../styles/home.css"



export default function Home() {

  const locations = useLoaderData();

 
  return (
    <div className="Home">
   
    
      <div className="BoxBanner">
        
       <Banner img={BannerBackground} title='Chez vous, partout et ailleurs' /> 
      </div>
        
        <CardList locations={locations} />
    </div>
  );
}


export function locationsLoader() {
  return locationList;
};