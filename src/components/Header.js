import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../styles/assets/logos/logo192.png";

const Header = () => {
    return(
        <div className="header">
            <div className="logoheader">
                <Link to="/">
                    <img src={logo} alt="logo kasa"/>
                </Link>
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to="/" end>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header