import React from "react";
import { useState } from "react";
import arrow from "../styles/assets/arrowleft.svg"

const Carousel = ({ imgurl })=>{
    const showArrows = imgurl.length >= 2 ? true : false;
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstPicture = currentIndex === 0;
        const newIndex = isFirstPicture ? imgurl.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastPicture = currentIndex === imgurl.length - 1;
        const newIndex = isLastPicture ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return(
    <div className="carousel">
        <div
          className="imgcarou"
          style={{ backgroundImage: `url(${imgurl[currentIndex]})` }}
        >
          {showArrows && ( 
          <div className="arrowcontainer">
            <div className="arrowleft" onClick={goToPrevious}>
              <img src={arrow} alt="fléche gauche" />
            </div>
            <div className="arrowright" onClick={goToNext}>
              <img src={arrow} alt="fléche droite" />
            </div>
          </div>
            )}
        </div>
    </div>
    )
}

export default Carousel;