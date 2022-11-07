import React from "react";
import { useParams } from 'react-router-dom';
import data from "../data/logements.json";
import star from '../styles/assets/star.svg';
import emptystar from '../styles/assets/emptystar.svg';
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Fichelogement = ({imgurl, text, content}) => {
  const starcounter = [1, 2, 3, 4, 5];
  const params = useParams();
  const logementdata = data.find((logement) => logement.id === params.id);
  if(logementdata !== undefined) { 
    return (
      <div>
        <Header />
        <Carousel imgurl={logementdata.pictures} />
        <div className="info">
          <div className="fiche-title-address"> 
            <h1>{logementdata.title}</h1>
            <h2>{logementdata.location}</h2>
            <div className="tags">
              {logementdata.tags.map((tag, index) =>(
                <li key={index}>{tag}</li>
              ))}
            </div>
          </div> 
          <div className="hostrate">
            <div className="host">
              <h3>{logementdata.host.name}</h3>
              <div className="blank"></div>
            </div>
            <div className="rating">
                {starcounter.map((starcount, index) => (
                  <img className="fullstar" key={index} src={starcount <= logementdata.rating ? star : emptystar} alt="star" />
                ))}
            </div>
          </div>
        </div>
        <div className="desc">
          <div className="description">
            <Collapse text="Description" content={logementdata.description} />
          </div>
          <div className="Equipments">
            <Collapse 
              text="Equipements" 
              content={logementdata.equipments.map((equipment, index) =>(
                <li key={index}>{equipment}</li>
              ))} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    window.location.href ="/errorpage";
  }
};

export default Fichelogement;
