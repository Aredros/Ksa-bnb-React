import React from "react";
import data from "../data/logements.json";
import Card from "./Card";

const Gallery = () =>{
    return(
        <div className="gallery">
            <ul>
                {data.map((logement)=>(
                    <Card key={logement.id} logement={logement} />
                ))}
            </ul>
        </div>
    );
}

export default Gallery;