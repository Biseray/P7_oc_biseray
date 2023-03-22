import React from "react";


// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagBox from "../../components/TagBox";
import BoxInfo from "../../components/BoxInfo";
import style from "../../styles/fichedetail.module.css"
import locationList from "../../datas/logements";
// import Rating from "../../components/Rating";
import { useLoaderData } from "react-router";
import { TabTitle } from "../../utiles/TabTitle";
export default function FicheDetail() {
 
  
  
  const dataLocation = useLoaderData();

 
   // const selectLocation 
 
  TabTitle(`Kasa - ${dataLocation.title}`);
  return (
    <div className={style.FicheDetail}>
    < div className = { style.carrouselPicture } >
    <div>< img  className = { style.imgc } src={dataLocation.cover} alt="" /> </div>
      <div className={style.posFleche}>
          
           
          {/* <div className={style.flecheLeft">   <FontAwesomeIcon className={style.fleche" icon={faAngleLeft} />  <FontAwesomeIcon className={style.fleche" icon={faAngleRight} /> </div>          */}
          
            
        
          
        </div>
      </div>

      <div className={style.posInfoLocation}>
        <div className={style.locationInfo}>
          <h1 className={style.NameLocation}> {dataLocation.title}   </h1>
          <h2 className={style.city}>  {dataLocation.location}   </h2>
          <div className={style.posTag}> <TagBox tags={dataLocation.tags } />   </div>
          
        </div>
        <div className={style.posDirection}>
          <div className={style.posCartProfil}>
          <div className={style.profil}>
            <p className={style.name}> {dataLocation.host.name}</p>
            <img className={style.profilImg} src={dataLocation.host.picture} alt={dataLocation.host.name} />
          </div>
        </div>
       
           <div>{dataLocation.rating}</div>  
        </div>
      </div>
      <div className={style.posBoxI}>
        <BoxInfo title={"Description"} description={dataLocation.description} />
        <BoxInfo title={"Équipements"} equipements={dataLocation.equipments} />
      </div>
    </div>
  );
  
}

export function locationLoader({params}) {

 return locationList.find(location => location.id === params.id);

};