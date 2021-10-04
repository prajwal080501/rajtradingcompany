import { motion } from "framer-motion";
import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import img from "./images/img11.jpg";
import texture from "./images/img8.jpg";
import pop from "../services/images/pop.jpg";
import scaffolding from "../services/images/scaffolding.jpg";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <h1 className="title">Services</h1>
      <CardGroup className="card-container">
        <Card className="card">
          <Card.Img variant="top" src="https://source.unsplash.com/1600x900/?paint,interior
/100px160/?bungalow" />
          <Card.Body>
            <Card.Title>Residential Painting Work</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="https://source.unsplash.com/1600x900/?paint,interior,walldesigns,texture,wallfashion, pop
/100px160/?wall" className="img" />
          <Card.Body>
            <Card.Title>Texture Designing</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/1600x900/?paint,pipepainting,tower,buildings,tank,pipeline,structure,office,epoxy
/100px160/?company"
          />
          <Card.Body>
            <Card.Title>Industrial Painting Work</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={scaffolding} className="img-pop" />
          <Card.Body>
            <Card.Title>Scaffolding</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={pop} className="img-pop" />
          <Card.Body>
            <Card.Title>POP & Gypsum</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/1600x900/?paint,pipepainting,tower,buildings,tank,pipeline,structure,office,epoxy
/100px160/?company"
          />
          <Card.Body>
            <Card.Title>Interior Consultation</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </motion.div>
  );
};

export default Service;
