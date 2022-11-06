import React from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const Errorpage = () => {
  return (
    <div>
      <Header />
      <div className="errormsg">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">
        {" "}
        <h3>Retourner sur la page</h3>
      </Link>
      </div>
      <Footer />  
    </div>
  );
};

export default Errorpage;
