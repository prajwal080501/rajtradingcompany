import React, { useState } from "react";
import { SliderData } from "../../Data/SliderData";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";

import {
  CardImage,
  CardTitle,
  ServiceCardHolder,
  ServiceHeroSection,
} from "./ServiceElements";

import "./Service.css";
// import Container from 'react-bootstrap/Container'
import Hero from "../Hero/Hero";
import img from "./contactimg.jpg";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { Button, Button2 } from "../Button/Button";
import { LinkItem } from "../Footer/FooterElements";
import img3 from "./house3.jpg";
import texture from "./Texture.jpg";
import pop from "./pop.jpg";
import {
  ContactContainer,
  ContactHeroContent,
  ContactHeroSection,
} from "../Contact/ContactElements";
import { Card, CardGroup } from "react-bootstrap";



const Contact = ({ toggle, isOpen, setIsOpen, reverse }) => {
  const [heroSection, setHeroSection] = useState(false);

  const scrollEffect = () => {
    if (window.scrollY >= 120) {
      setHeroSection(true);
    } else {
      setHeroSection(false);
    }
  };
  window.addEventListener("scroll", scrollEffect);

  return (
    <>
      <GlobalStyle />
      <ServiceHeroSection className={heroSection ? "hero active" : "hero"}>
        <ContactHeroContent>
          <h1>Services</h1>
        </ContactHeroContent>
      </ServiceHeroSection>
      <CardGroup className="card-group">
        <Card style={{backgroundColor: '#EA665C', color: 'white'}} className="card">
          <Card.Img
            className="card-image"
            variant="top"
            src={img3}
          />
          <Card.Body>
            <Card.Title style={{color: 'white'}} className="card-title">Residential Painting</Card.Title>
            <Card.Text style={{color: 'white'}} className="card-text">
              Looking for hassle-free painting experience? Opt for this service
              and and leave the job to us to help you make the task of painting
              your house seamless and easy.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
        <Card style={{backgroundColor: '#42A0C7', color: 'white'}} className="card">
          <Card.Img
            className="card-image"
            variant="top"
            src={texture}
          />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Textures & Wallpapers</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Experience in Wall designing and Wall Textures will provide unique dsigns and suggestions to revamp any space in your home
            </Card.Text>
          </Card.Body>  
          <Card.Footer>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="card-group">
      <Card style={{backgroundColor: '#DE8932', color: 'white'}} className="card">
          <Card.Img
            className="card-image"
            variant="top"
            src="https://source.unsplash.com/weekly?Industrial,office"
          />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Industrial Painting Work</Card.Title>
            <Card.Text style={{color: 'white'}}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
        <Card style={{backgroundColor: '#538C48', color: 'white'}} className="card">
          <Card.Img
            className="card-image"
            variant="top"
            src={pop}
          />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>POP & Gypsum</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Providing world class modern and unique looking ceiling and POP designs 
            </Card.Text>
          </Card.Body>  
          <Card.Footer>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Contact;
