import styled from "styled-components";
import img from "./contactimg.jpg";



export const ContactHeroSection = styled.div`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0px 0px 15px 15px;
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
  width: 150vw;
  background-color: #fffff00;
  // opacity: 0.5;
  height: 100vh;
  object-fit: cover;
  height: 150vh;

  #media screen and (max-width: 768px){
      height: 80vh;
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

export const Card = styled.div`
width: 80vh;
height: fit-content;
background-color: #f5a23698;
color: white;
margin: auto;
margin-top : 10%;
margin-bottom: 10px;
align-items: center;
box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.5), 0 8px 18px 0 rgba(0, 0, 0, 0.19);
background-clip: border-box;
border: 2px solid transparent;
z-index: 10;
elevation: 10px;
padding: 10px;
backdrop-filter: blur(10px);
border-radius:5%;

@media screen and (max-width: 768px){
    width: 80%;
    height: fit-content;
    margin: auto;
    margin-bottom: 10px;
    margin-top:15%;
}
`;
export const ImageContainer = styled.img`
display: flex;
justify-self: center;
border-radius: 50%;
margin: auto;
margin-top: 14px;
width: 180px;
height: auto;

border: 3px solid #fff;
`;
export const NameContainer = styled.h2`
color: white;
margin-top: 10px;
font-weight: 700;
font-size: 1.5rem;
text-align: center;
padding: 5px;
letter-spacing:1px;
font-family: 'Roboto', sans-serif;
`;
export const DegreeContainer = styled.h4`
color: white;
margin-top: 10px;
font-weight: 700;
font-size: 1rem;
text-align: center;
padding: 5px;
letter-spacing:1px;
font-family: 'Roboto', sans-serif;
`;
export const TextContainer = styled.div`
margin: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

