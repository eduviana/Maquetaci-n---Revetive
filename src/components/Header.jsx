import React, { useEffect, useLayoutEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import Navbar from "./Navbar";
import imgURL from "../assets/nature.jpg";
import useWindowDimensions from "../hooks/useWindowSizes";

const Header = () => {

const { width } = useWindowDimensions();


  return (
    <header className="header">
      <div className="navbar__container">
        <div className="brand__container">
          <span className="brand__title--black" >Reve</span>
          <span className="brand__title--blue">Tive.</span>
        </div>

        {width < "768" ? <MenuMobile /> : <Navbar />}
      </div>

      <div className="hero__container">
       <div className="hero__background" >
       <div className="hero__texts" >
          <h2 className="hero__subtitle" >Easy way to build perfect Websites</h2>
          <h1 className="hero__title" >Beautify handcrafted tempaltes for your websites</h1>
          <button className="hero__cta" >Get Started</button>
        </div>
       </div>
        
      </div>
    </header>
  );
};

export default Header;
