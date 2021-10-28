import React, {useState} from "react";
import GlobalStyle from "../../GlobalStyles/GlobalStyle";
import CardGroup from 'react-bootstrap/CardGroup'

import {
  ContactHeroContent,
  ContactHeroImage,
  ServiceContainer,
  ServiceHeroSection,
  Tagline,
} from "./ServiceElements";
import img from "./contactimg.jpg";
import { Card } from "react-bootstrap";

const Service = () => {
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
      <ServiceHeroSection className={heroSection ? "hero active" : "hero"}>
        <ContactHeroContent>
          <h1 style={{textAlign: 'center'}}>Services</h1>
        </ContactHeroContent>
      </ServiceHeroSection>
      <ServiceContainer>
      <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </ServiceContainer>
    </>
  );
};

export default Service;
