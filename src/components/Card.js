import React from 'react';
import { Link } from "react-router-dom";

const Card = ({logement}) =>{
    return(
        <li className='card'>
            <Link to={"/logement/" + logement.id}>
                <img src={logement.cover} alt='logement'/>
                <p>{logement.title}</p>
            </Link>
        </li>
    );
}

export default Card