import { motion } from "framer-motion";
import styled from "styled-components";
import img from "./bgimg.jpg";



export const ContactHeroSection = styled(motion.div)`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
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
export const AboutContaner = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: row;
justiy-content-center;

@media screen and (max-width:768px){
  display: flex;
  flex-direction: column;
  height: 100%;
}
`;
export const AboutCard = styled.div`
width: 40%;
height: 80vh;
display: flex;
flex-direction: column;
justify-self: flex-start;
padding: 15px;
text-align: center;
align-items: center;
background-image: linear-gradient(0deg, #fff -10%, rgb(255, 255, 255) 50%, #fff 100% );

@media screen and (max-width: 768px) {
  width: 100%;
  height: 80vh;
  padding: 15px;
}
`;
export const CompanyCard = styled.div`
width: 60%;
height: 80vh;
color: white;
display: flex;
flex-direction: column;
padding: 25px;
margin-bottom: 17px;
text-align: center;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
background-color: #1a5ef0;
align-itmems: center;
@media screen and (max-width: 768px){
  width: 95%;
  height: 80vh;
  padding: 15px;
  overflow: scroll;
  display: flex;
  justify-self:center;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}
`

export const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: row;

@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
}
`

export const ColumnRight = styled.div`
width: 40%;
height: 100vh;
display: flex;
flex-direction: column;
justify-self: flex-start;
padding: 10px;
align-items: center;

@media screen and (max-width: 768px){
  width: 80%;
  height: 300px;
  align-items: center;

}
`;
export const ColumnLeft = styled.div`
width: 60%;
height: 100vh;
border: 2px solid black;
`;
export const Image = styled.img`
width: 200px;
height: 200px;
border-radius:50%;
margin: auto;
margin-top: 80px;
border: 3px solid #5433ff;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
`

export const ImageContainer = styled.div`
width: fit-content;
height: 30%;
`

export const NameTitle = styled.h2`
color; black;
font-size:2rem;
font-family: 'Architects Daughter', serif;
margin: auto;
padding: 15px;
margin-top: -9%;
`
export const Position = styled.h4`
color; black;
font-family: 'Roboto Daughter', serif;
margin: auto;
padding: 10px;
margin-top: -19%;
`;

export const Content = styled.p`
text-align: left;
color; white;
  margin: auto;
  padding: 10px;
margin-top: 15px;
line-height: 1.5;
letter-spacing:1.5px;
font-weight: 700;
@media screen and (max-width: 768px) {
  letter-spacing: 1.5px;
  font-style: normal;
  text-align: center;
  padding: 15px;
  letter-spacing: 1px;

}


`

export const Title = styled.h2`
color; white;
font-size:2rem;
margin-top: 30px;
text-align: left;
font-weight: 900;

@media screen and (max-width: 768px) {
  margin-top: 8px;
  text-align; center;
  margin: auto;
}
`

export const Sign = styled.h2`
margin-top: 10px;
text-align: right;
font-size:1rem;
font-family: 'Architects Doughter', cursive;
`