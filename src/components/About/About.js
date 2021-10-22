import React from 'react'
import { Card, ContactHeroContent, ContactHeroImage, ContactHeroSection, DegreeContainer, ImageContainer, NameContainer, TextContainer } from './AboutElements';
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { GiCircleClaws } from "react-icons/gi";

import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import img from "./contactimg.jpg";
import profile from "./profile.jpg"
import { BsFillAwardFill } from "react-icons/bs";

const About = () => {
    return (
        <>
            <GlobalStyle />
      <ContactHeroSection>
        <ContactHeroImage src={img} alt="" />
        <ContactHeroContent>
            <Card>
              <ImageContainer src={profile} />
              <TextContainer><FaUserAlt/> <NameContainer>Adv Rajan Ladkat</NameContainer></TextContainer>
              <TextContainer><BsFillAwardFill/> <DegreeContainer>Diploma in Cyber Laws <br /> BA LLB</DegreeContainer></TextContainer>
              <TextContainer><BsFillAwardFill/> <DegreeContainer>PMRDA PMC Court</DegreeContainer></TextContainer>
              <TextContainer><GiCircleClaws style={{fontSize: '2rem', marginTop: '10px'}}/></TextContainer>
            </Card>
        </ContactHeroContent>
        </ContactHeroSection>
        </>
        )
}

export default About
