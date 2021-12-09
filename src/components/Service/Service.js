import React, { useState, useEffect } from "react";
import { SliderData } from "../../Data/SliderData";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import Aos from "aos";
import {
  CardImage,
  CardTitle,
  ServiceCardHolder,
  ServiceHeroSection,
} from "./ServiceElements";
import { Link } from "react-router-dom";

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
import scaffolding from "./bambooscaffolding.jpg";
import {
  ContactContainer,
  ContactHeroContent,
  ContactHeroSection,
} from "../Contact/ContactElements";
import { Card, CardGroup } from "react-bootstrap";
import { motion } from "framer-motion";

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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <GlobalStyle />
      <ServiceHeroSection
        initial={{ x: -50, opacity: 0.4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className={heroSection ? "hero active" : "hero"}
      >
        <ContactHeroContent>
          <h1>Services</h1>
        </ContactHeroContent>
      </ServiceHeroSection>
      <CardGroup className="card-group">
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#EA665C", color: "white" }}
          className="card"
          whileHover={{ scale: 1.01, duration: 0.5 }}
        >
          <Card.Img className="card-image" variant="top" src={img3} />
          <Card.Body>
            <Card.Title style={{ color: "white" }} className="card-title">
              Residential Painting
            </Card.Title>
            <Card.Text style={{ color: "white" }} className="card-text">
              Looking for hassle-free painting experience? Opt for this service
              and and leave the job to us to help you make the task of painting
              your house seamless and easy.{" "}
            </Card.Text>
            <Link to="/gallery" className="card-button">View More</Link>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#42A0C7", color: "white" }}
          className="card"
          whileHover={{ scale: 1.01, duration: 0.5 }}
        >
          <Card.Img className="card-image" variant="top" src={texture} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              Textures & Wallpapers
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              Experience in Wall designing and Wall Textures will provide unique
              dsigns and suggestions to revamp any space in your home
            </Card.Text>
            <button className="card-button">View More</button>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
      </CardGroup>
      <CardGroup className="card-group">
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#DE8932", color: "white" }}
          className="card"
          whileHover={{ scale: 1.01, duration: 0.5 }}
        >
          <Card.Img
            className="card-image"
            variant="top"
            src="https://source.unsplash.com/weekly?Industrial,office"
          />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              Industrial Painting Work
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              Industrial Projects offers a host of services that cater to the
              needs of large users and help them for a big-scale painting job.
            </Card.Text>
            <button className="card-button">View More</button>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#8A62A4", color: "white" }}
          className="card"
          whileHover={{ scale: 1.01, duration: 0.5 }}
        >
          <Card.Img className="card-image" variant="top" src={pop} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>POP & Gypsum</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Providing world class modern and unique looking ceiling and POP
              designs
            </Card.Text>
            <button className="card-button">View More</button>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
      </CardGroup>
      <CardGroup className="card-group">
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#F1CE6D", color: "white" }}
          className="card"
          whileHover={{ scale: 1.01, duration: 0.5 }}
        >
          <Card.Img
            className="card-image"
            variant="top"
            src="https://source.unsplash.com/weekly?Industrial,office"
          />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Waterproofing</Card.Title>
            <Card.Text style={{ color: "white" }}>
              We offer the highest standard in waterproofing technology, methods
              and materials for your interior & exterior waterproofing.
            </Card.Text>
            <button className="card-button">View More</button>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
        <motion.Card
          data-aos="fade-right"
          data-aos-duration="700"
          className="card"
          initial={{ x: -100, opacity: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.001, ease: "easeOut" }}
          style={{ backgroundColor: "#538C48", color: "white" }}
          whileHover={{ scale: 1.01, duration: 0.2 }}
        >
          <Card.Img className="card-image" variant="top" src={scaffolding} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>Scaffolding</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Providing world class modern and unique looking ceiling and POP
              designs
            </Card.Text>
            <button className="card-button">View More</button>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </motion.Card>
      </CardGroup>
    </>
  );
};

export default Contact;
