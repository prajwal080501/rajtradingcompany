import React, {useState, useEffect} from "react";
import { SliderData } from "../../Data/SliderData";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import "./Contact.css";
import emailjs from "emailjs-com";
import Aos from "aos";

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
  MapContainer,
  Section,
  TextArea,
} from "./ContactElements";
import img from "./contactimg.jpg";
import img2 from "./contact.jpg";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { Button, Button2, Button3 } from "../Button/Button";
import { LinkItem } from "../Footer/FooterElements";
import Map from "../Map/Map";

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
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ljjvnrm",
        "template_wvvzw7r",
        e.target,
        "user_rIpklSkS5Ci1szudsqqVg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <>
      
      <GlobalStyle />
      <ContactHeroSection
        initial={{ x: 50, opacity: 0.4 }}
        animate={{ opacity: 1, x:0}}
        transition={{ duration: 0.001, ease:"easeOut" }}
        className={heroSection ? "hero active" : "hero"} >

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
        <ContactCard data-aos="fade-up" data-aos-duration="700">
          <ContactTitle>Contact</ContactTitle>
          <MailContainer>
            <ContactSubHeading>Mail</ContactSubHeading>
            <ContactSummary  href="mailto:raj_tradingcompany@yahoo.co.in">
              {" "}
              <AiFillMail />
              raj_tradingcompany@yahoo.co.in
            </ContactSummary>
          </MailContainer>
          <MailContainer>
            <ContactSubHeading>Phone</ContactSubHeading>
            <ContactSummary  href="tel:+919922991836">
              {" "}
              <AiFillPhone />
              +919922991836
            </ContactSummary>
          </MailContainer>
          <MailContainer>
            <ContactSubHeading>Address</ContactSubHeading>
            <ContactSummary>
              {" "}
              <HiOfficeBuilding />
              Sukhsagar Trimurty Colony behind Sadhana Society Near Ganesh Temple, Hadapsar Pune 28
            </ContactSummary>
            <MapButton
              href="https://maps.app.goo.gl/qxiNg6JS8GJpmkTo6"
              primary="true"
            >
              View on map
            </MapButton>
            
          </MailContainer>
        </ContactCard>
        <FormCard >
          <h2
            style={{
              color: "black",
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "900",
              marginTop: '1%',
              marginBottom: '5%',
            }}
          >
            Contact Us
          </h2>
          <FormContainer type="submit" onSubmit={sendEmail}>
            <InputContainer>
              <Label value="Name">Name</Label>
              <Input type="text" placeholder="Name" name="name"></Input>
            </InputContainer>
            <InputContainer>
              <Label value="Name">Email</Label>
              <Input type="email" placeholder="E-mail" name="email"></Input>
            </InputContainer>
            <InputContainer>
              <Label value="Name">Phone</Label>
              <Input type="phone" placeholder="Phone Number" name="number"></Input>
            </InputContainer>
            <InputContainer>
              <Label value="Name">Write to us.</Label>
              <TextArea type="text" placeholder="Message.." name="message"></TextArea>
            </InputContainer>
            <InputContainer>
              <Button3
                type="submit"
                style={{ width: "30%", marginTop: "10px", marginTop: "15px" }}
                primary="true"
              >
                Submit
              </Button3>
            </InputContainer>
          </FormContainer>
        </FormCard>
      </ContactContainer>
      {/* <MapContainer>
        <Map />
      </MapContainer> */}
    </>
  );
};

export default Contact;
