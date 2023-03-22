import React from "react";

import { useParams } from "react-router-dom";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EquipementBox from "../../components/EquipementBox"
import TagBox from "../../components/TagBox";
import BoxInfo from "../../components/BoxInfo";
import "../../styles/fichedetail.css"
import locationList from "../../datas/logements";
// import Rating from "../../components/Rating";
import { useLoaderData } from "react-router";

export default function FicheDetail() {
  const { id } = useParams();
  
  
  const locationsInfo = useLoaderData();

 const dataLocation = locationsInfo.find(location => location.id === id.toString());
   // const selectLocation 
 
  
  return (
    <div className="FicheDetail">
      <div className="carrouselPicture">
        <div><img  className="imgc" src={dataLocation.cover} alt="" /> </div>
        <div className="posFleche">
          
           
          {/* <div className="flecheLeft">   <FontAwesomeIcon className="fleche" icon={faAngleLeft} />  <FontAwesomeIcon className="fleche" icon={faAngleRight} /> </div>          */}
          
            
        
          
        </div>
      </div>

      <div className="posInfoLocation">
        <div className="locationInfo">
          <h1 className="NameLocation"> {dataLocation.title}   </h1>
          <h2 className="city">  {dataLocation.location}   </h2>
          <div className="posTag"><TagBox tags={dataLocation.tags } />   </div>
          
        </div>
        <div className="posDirection">
          <div className="posCartProfil">
          <div className="profil">
            <p className="name"> {dataLocation.host.name}</p>
            <img className="profilImg" src={dataLocation.host.picture} alt={dataLocation.host.name} />
          </div>
        </div>
       
           <div>{dataLocation.rating}</div>  
        </div>
      </div>
      <div className="posBoxI">
        <BoxInfo title={"Description"} description={dataLocation.description} />
        <EquipementBox title={"Équipements"} equipements={dataLocation.equipments} />
      </div>
    </div>
  );
  
}

export function locationsLoader() {
  return locationList;
};