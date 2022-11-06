import React from "react";
import logo from "../styles/assets/logos/logo192.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="infofooter">
                <img src={logo} alt="logo kasa" />
                <p>@ 2020. Kasa. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;