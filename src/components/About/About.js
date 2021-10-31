import React, { useState, useEffect } from "react";
import {
  AboutCard,
  AboutContaner,
  Card,
  ColumnLeft,
  ColumnRight,
  CompanyCard,
  ContactHeroContent,
  ContactHeroImage,
  ContactHeroSection,
  Container,
  Content,
  DegreeContainer,
  Image,
  ImageContainer,
  NameContainer,
  NameTitle,
  Position,
  Sign,
  TextContainer,
  Title,
} from "./AboutElements";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { GiCircleClaws } from "react-icons/gi";
import "./About.css";
import Aos from "aos";

import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import img from "./contactimg.jpg";
import profile from "./profile.jpg";
import { BsFillAwardFill } from "react-icons/bs";
import {
  ContactCard,
  ContactSubHeading,
  ContactSummary,
  ContactTitle,
  FormCard,
  FormContainer,
  Input,
  InputContainer,
  Label,
  MailContainer,
  MapButton,
} from "../Contact/ContactElements";
import { Button2 } from "../Button/Button";

const About = () => {
  const [heroSection, setHeroSection] = useState(false);
  const scrollEffect = () => {
    if (window.scrollY >= 250) {
      setHeroSection(true);
    } else {
      setHeroSection(false);
    }
  };
  window.addEventListener("scroll", scrollEffect);
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <>
      <GlobalStyle />
      <ContactHeroSection
        initial={{ x: -50, opacity: 0.4 }}
         animate={{ opacity: 1, x:0}}
         transition={{ duration: 0.001, ease: "easeOut" }}
        className={heroSection ? "hero active" : "hero"}>
        <ContactHeroContent>
          <h1>About</h1>
        </ContactHeroContent>
      </ContactHeroSection>
      <AboutContaner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <AboutCard data-aos="fade-left">
          <Image src={profile} />
          <NameTitle>Govind Lavhe</NameTitle>
          <Position>CEO & Managing Director</Position>
        </AboutCard>
        <CompanyCard data-aos="fade-left">
          <Title
          >
            Contact Us
          </Title>
          <Content >
            More than 40 years Raj Trading Company is working as Industrial &
            Residential Painting contractors & service providers. We run our
            business in various sectors in the societies like Industries and
            corporate, Builders and housing societies, banks educational and
            financial institutions etc . We have vast experience in <br /> • Paint
            applications and Industrial painting with AMC service providers. <br /> •
            Builders and corporate painting with AMC Services providers. <br /> •
            Residential Painting work. • Deco, PU Painting and Polish. <br /> • Epoxy
            paint & epoxy floor coating. • POP, Interiors, Decorative and
            Designer painting work. <br /> • Bamboo and metal scaffolding for exterior
            and interior work. <br /> • Exterior deep cleaning and waterproofing.
            <Sign style={{textAlign: 'right', fontSize:"1rem", marginTop: '10px'}}>-Govind Lavhe</Sign>
          </Content>
        </CompanyCard>
      </AboutContaner>
    </>
  );
};

export default About;
