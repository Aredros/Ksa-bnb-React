import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerimg from "../styles/assets/banner.png"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner 
      src={bannerimg}
      alt={"banniere plage"}
      text={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
