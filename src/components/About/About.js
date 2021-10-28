import React, {useState} from 'react'
import { Card, ContactHeroContent, ContactHeroImage, ContactHeroSection, DegreeContainer, ImageContainer, NameContainer, TextContainer } from './AboutElements';
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { GiCircleClaws } from "react-icons/gi";
import "./About.css";

import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import img from "./contactimg.jpg";
import profile from "./profile.jpg"
import { BsFillAwardFill } from "react-icons/bs";
import { ContactContainer } from '../Contact/ContactElements';

const About = () => {
  const [heroSection, setHeroSection] = useState(false);
  const scrollEffect = () => {
    if (window.scrollY >=250) {
      setHeroSection(true);
    }
    else {
      setHeroSection(false);
    }
  }
  window.addEventListener("scroll", scrollEffect);
    return (
        <>
            <GlobalStyle />
        <ContactHeroSection
          className={heroSection ? "hero active" : "hero"}>
        <ContactHeroContent>
            <h1>About</h1>
          </ContactHeroContent>
          
        </ContactHeroSection>
        <ContactContainer>
          <Card>
              <ImageContainer src={profile} />
              <TextContainer><FaUserAlt/> <NameContainer>Adv Rajan Ladkat</NameContainer></TextContainer>
              <TextContainer><BsFillAwardFill/> <DegreeContainer>Diploma in Cyber Laws <br /> BA LLB</DegreeContainer></TextContainer>
              <TextContainer><BsFillAwardFill/> <DegreeContainer>PMRDA PMC Court</DegreeContainer></TextContainer>
              <TextContainer><GiCircleClaws style={{fontSize: '2rem', marginTop: '10px'}}/></TextContainer>
            </Card>
          </ContactContainer>
        </>
        )
}

export default About
