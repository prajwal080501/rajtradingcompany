import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Service.css"

const Service = () => {
  return (
    <div>
      <h1 className="uk-title">Services</h1>
      <CardGroup>
        <Card className="card">
          <Card.Img variant="top" src="https://source.unsplash.com/1600x900/?nature,water" />
          <Card.Body>
            <Card.Title>Resiential Painting</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="https://source.unsplash.com/1600x900/?nature,water" />
          <Card.Body>
            <Card.Title>Industrial Painting</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="https://source.unsplash.com/1600x900/?nature,water" />
          <Card.Body>
            <Card.Title>POP & Scaffolding</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
