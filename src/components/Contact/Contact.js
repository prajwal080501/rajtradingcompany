import React, {useState} from "react";
import { SliderData } from "../../Data/SliderData";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import "./Contact.css";


// import Container from 'react-bootstrap/Container'
import Hero from "../Hero/Hero";
import {
  ColumnLeft,
  ColumnRight,
  ContactCard,
  ContactContainer,
  ContactHeroContent,
  ContactHeroImage,
  ContactHeroSection,
  ContactLinkItem,
  ContactSubHeading,
  ContactSummary,
  ContactTitle,
  Container,
  FormCard,
  FormContainer,
  FormHeading,
  Input,
  InputContainer,
  Label,
  MailContainer,
  MapButton,
  Section,
  TextArea,
} from "./ContactElements";
import img from "./contactimg.jpg";
import img2 from "./contact.jpg";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { Button, Button2 } from "../Button/Button";
import { LinkItem } from "../Footer/FooterElements";

const Contact = ({ toggle, isOpen, setIsOpen, reverse }) => {
  const [heroSection, setHeroSection] = useState(false);

  const scrollEffect = () => {
    if (window.scrollY >=120) {
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
      <ContactHeroSection className={heroSection ? "hero active" : "hero"} >

        <ContactHeroContent>
          <h1>Contact</h1>
        </ContactHeroContent>
      </ContactHeroSection>
      <ContactContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <ContactCard>
          <ContactTitle>Contact</ContactTitle>
          <MailContainer>
            <ContactSubHeading>Mail</ContactSubHeading>
            <ContactSummary>
              {" "}
              <AiFillMail />
              rajan.ladkat@gmail.com
            </ContactSummary>
          </MailContainer>
          <MailContainer>
            <ContactSubHeading>Phone</ContactSubHeading>
            <ContactSummary>
              {" "}
              <AiFillPhone />
              +918329399576
            </ContactSummary>
          </MailContainer>
          <MailContainer>
            <ContactSubHeading>Address</ContactSubHeading>
            <ContactSummary>
              {" "}
              <HiOfficeBuilding />
              Sadguru Hambirbaba Society opposite Novotel Hotel adjacent
              Lokmanya Tilak School Ramwadi Pune 14
            </ContactSummary>
            <MapButton
              href="https://maps.google.com/?cid=7960314072179627187&entry=gps"
              primary="true"
            >
              View on map
            </MapButton>
          </MailContainer>
        </ContactCard>
        <FormCard>
          <h2
            style={{
              color: "black",
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Contact Us
          </h2>
          <FormContainer>
            <InputContainer>
              <Label value="Name">Name</Label>
              <Input type="text" placeholder="Name"></Input>
            </InputContainer>
            <InputContainer>
              <Label value="Name">Email</Label>
              <Input type="email" placeholder="E-mail"></Input>
            </InputContainer>
            <InputContainer>
              <Label value="Name">Phone</Label>
              <Input type="number" placeholder="Phone Number"></Input>
            </InputContainer>
            <InputContainer>
              <Button2
                style={{ width: "30%", marginTop: "10px", marginTop: "15px" }}
                primary="true"
              >
                Submit
              </Button2>
            </InputContainer>
          </FormContainer>
        </FormCard>
      </ContactContainer>
    </>
  );
};

export default Contact;
