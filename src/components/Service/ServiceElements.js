import styled from "styled-components";
import img from "./house.jpg";
import { motion } from "framer-motion";


export const ServiceHeroSection = styled(motion.div)`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  background-image:linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: red;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
&::before{
  backdrop-filter : blur(100px);

}  
  @media screen and (max-width: 768px){
    height: 70vh;
}
`;

export const ContactHeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  // opacity: 0.5;
  height: 100vh;
  object-fit: cover;

  #media screen and (max-width: 768px){
      height: 50vh;
  }
`;

export const ContactHeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: white;
  text-align: left;
  padding: 50px;

  h1 {
    position: absolute;
    top: 240%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:3rem;
    font-weight: 900;

    @media screen and (max-width: 768px){
        position: absolute;
        top: 210%;

    }
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba (0, 0, 0, 0.4);
    text-align: left;
  }
`;

export const Tagline = styled.h2`
color: black;
font-weight : 700;
text-align: center;
padding: 10px;
`

export const ServiceContainer = styled.div`
width: 100%;
height: 100vh;
`;

//service-card container
export const ServiceCardHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border: 2px solid black;
  width: 100%;
  height: auto;
`
//service-card

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 50vh;
  border-radius: 10px;
  margin: 10px;
`
//card-title: Card
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: Left;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }
`

//cardimage
export const CardImage = styled.img`
  width: cover;
  height: 60%;
  margin-top: -80px;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;

`

