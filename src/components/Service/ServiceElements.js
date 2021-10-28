import styled from "styled-components";
import img from "./contactimg.jpg";

export const ServiceHeroSection = styled.section`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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

