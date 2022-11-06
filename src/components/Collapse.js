import React, { useState } from "react";
import arrow from "../styles/assets/dropdownarrow.svg";

const Collapse = ({ text, content }) => {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <div className="collapse">
            <button className="btnc" onClick={() => setIsOpen(!isOpen)}>
                <p className="txtbtn">{text}</p>
                <img
                    className={ isOpen ? "arrowup" : "arrowdown"}
                    src={arrow}
                    alt="arrowdown"
                />
            </button>
            {isOpen && (
                <div className="content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse