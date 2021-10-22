import Navbar from "../Navbar/Navbar";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import Hero from "../Hero/Hero";
import { SliderData } from "../../Data/SliderData";
import Dropdown from "../Dropdown/Dropdown";
import React, { useState } from 'react';
import InfoSection from "../InfoSection/InfoSection";
import { InfoData } from "../../Data/InfoData";
import Footer from "../../Footer/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <GlobalStyle />
        <Dropdown isOpen={isOpen} toggle={toggle} />
       
        <Navbar toggle={toggle} />
        
      <Hero slides={SliderData} />
       
      <InfoSection {...InfoData} />

    </>
  );
}

export default Home;
