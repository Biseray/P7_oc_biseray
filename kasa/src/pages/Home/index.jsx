import React from "react";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import BannerBackground from "../../asset/photo-de-failse.png";
import { useLoaderData } from "react-router";
import locationList from '../../datas/logements.js';


export default function Home() {

  const locations = useLoaderData();
  return (
    <div className="Home">
   
        <Banner img={BannerBackground} title='Chez vous, partout et ailleurs' />
        <CardList locations={locations} />
    </div>
  );
}


export function locationsLoader() {
  return locationList;
};