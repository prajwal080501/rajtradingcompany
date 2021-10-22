import React from "react";
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
  return (
    <>
      <GlobalStyle />
      <ServiceHeroSection>
        <ContactHeroImage src={img} />
        <ContactHeroContent>
          <h1>Services</h1>
        </ContactHeroContent>
      </ServiceHeroSection>
      <ServiceContainer></ServiceContainer>
    </>
  );
};

export default Service;
