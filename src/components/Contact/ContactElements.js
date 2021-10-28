import styled from "styled-components";
import { motion } from "framer-motion";
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
  backdrop-filter : blur(10px);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);

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

export const MailContainer = styled.div`
display: flex;
flex-direction: column;
color: white;
align-items: center;

@media screen and (max-width: 768px){
  text-align: center;
  
}


`

export const FormContainer = styled.form`
padding: 80px;
align-items: center;
msrgin-top: -5%;


@media screen and (max-width: 768px){
  width: fit-content;
  justify-self: center;

}


`;

export const InputContainer = styled.div`
align-items: center;
margin-top: 10px;
@media screen and (max-width: 768px)
{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;

}
`
export const Label = styled.label`
display: block;
text-align: left;
font-size: 1rem;
font-weight: 600;
margin-bottom:-5px;
color: #000;
@media screen and (max-width:768px){
}

`
export const Input = styled.input`
border: 1px solid #cd853f;
padding:15px;
border-radius: 8px;
color: black;
font-weight: 600;
height: 50px;
width: 100%;
margin-top: 15px;
@media only screen and (max-width:768px){
  width: 160%;
  display: flex;
  justify-self: center;
}

&:focus{
  outline: none;
}

`
export const TextArea = styled.textarea`
border: 1px solid #cd853f;
padding: 6px;
height: 150px;
font-weight: 600;
color: black;
width: 100%;
border-radius: 10px;
margin-top: 15px;
@media screen and (max-width: 768px){
  width: 130%;
}
&:focus{
  outline:none;
}
`;

export const FormHeading = styled.h1`
font-weight: 700;
text-align: center;
font-size: 2rem;
color: black;
font-family : 'Roboto', sans-serif;

@media screen and (max-width: 768px){
  font-size: 1rem;
}
`
export const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`

export const Container = styled.div`
padding: 1rem calc((100vw- 1300px) /2);
display: grid;
grid-template-columns: 2fr 2fr;
grid-template-rows: 800px;
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`
export const ColumnLeft = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: #cd853f;
// line-height: 1.4;
// padding: 1rem 1rem;
// order: ${({ reverse }) => (reverse ? '2' : '1')};

// h1{
//     margin-bottom: 1rem;
//     font-size: clamp(1.5rem, 6vw, 2rem);
// }
// p{
//     margin-bottom :2rem;

// }
display: flex;
justify-self: flex-start;
width: 100vh;
`
export const ColumnRight = styled.div`
order: ${({ reverse }) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '1' : '2')};



}


img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width:768px){
        width: 90%;
        height: 90%;
    }
`
export const ContactLinkItem = styled.a`
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	align-self: center;
	left: 0;

	&:hover {
		color:#FECDE8;
		left: 6px;
		font-size: 1rem;
		border-bottom: 1px solid #fff;
	}

 @media screen and (max-width:768px) {
		font-size: 1rem;
		line-height: 28px;
		display: flex;
		&:hover{
			font-size: 14px;
		}
	}

	@media @media screen and (max-width: 640px){
		font-size: 4px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
  `

export const ContactContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
justiy-content-center;

@media screen and (max-width:768px){
  display: flex;
  flex-direction: column;
  height: 100%;
}
`;

export const ContactCard = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
justify-self: flex-start;
padding: 15px;
text-align: center;
align-items: center;
background-image: linear-gradient(0deg, rgb(205, 132, 63) 0%, rgb(205, 132, 73) 50%, rgb(205, 132, 83) 100% );

@media screen and (max-width: 768px) {
  width: fit-content;
  height: 80vh;
  padding: 15px;
}
`;

export const ContactTitle = styled.h2`
color: white;
font-size: 2.5rem;
text-align: center;
font-weight: 800;
margin-top: 15%;
@media screen and (max-width: 768px) {
  margin-top: 18%;
}
`;
export const ContactSubHeading = styled.h3`
color: white;
font-weight: 600;
margin-top: 4%;
`;
export const ContactSummary = styled.p`
color: white;
font-weight: 500;
padding: 10px;

`;

export const FormCard = styled.div`
width: 50%;
height: auto;
color: white;
display: flex;
flex-direction: column;
padding: 15px;
text-align: center;
align-itmems: center;
@media screen and (max-width: 768px){
  width: fit-content;
  height: 90vh;
  padding: 15px;
}
`
export const MapButton = styled.a`
background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
white-space: no-wrap;
ouline: none;
border-radius: 10px;
border: none;
min-width: 100px;
max-width: 200px;
cursor: default;
text-decoration: none;
list-style: none;
transition: 0.5s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? '#fff' : "#000d1a")};
font-size: ${({ big }) => (big ? '20px' : '14px')};

&:hover{
    transform: translateY(-4px);
}
`