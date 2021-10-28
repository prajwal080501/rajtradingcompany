

import React, {useState} from "react";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";

import {
  ContactHeroContent,
  ContactHeroImage,
  ServiceContainer,
  ServiceHeroSection,
  Tagline,
} from "./ServiceElements";
import img from "./contactimg.jpg";

const Service = () => {
  const [heroSection, setHeroSection] = useState(false);
  const scrollEffect = () => {
    if (window.scrollY >= 120) {
      setHeroSection(true);
    }
    else {
      setHeroSection(false);
    }
  }
  window.addEventListener("scroll", scrollEffect);
 
  const Service = () => {
    return (
      <>
  
        <GlobalStyle />
        <ServiceHeroSection className={heroSection ? "hero active" : "hero"}>
          <ContactHeroContent>
            <h1 style={{ textAlign: 'center' }}>Services</h1>
          </ContactHeroContent>
        </ServiceHeroSection>
   
      </>
    );
  }
}

export default Service;
 
