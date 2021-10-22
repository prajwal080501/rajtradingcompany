import styled, { css } from "styled-components";
import { IoArrowForward, IoArrowBack } from "react-icons/io5"
import { IoMdArrowForward } from "react-icons/io";




export const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
margin-top: 0px;
border-radius: 0px 0px 15px 15px;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
`;

export const HeroWrappper = styled.div`
width : 100%;
height: 100%;
display flex;
justify-content : center;
align-items: center;
overflow: hidden;
position: relative;
`

export const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;


`
export const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before{
    content="";
    position : absolute;
    z-index: 12;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.1;
    background: linear-gradient(0deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.62) 100% );
}

`
export const HeroImage = styled.img`
position :absolute;
top: 0;
left: 0;
width: 100vw;
// opacity: 0.5;
height: 100vh;
object-fit: cover;
background-attachment: fixed;
`
export const HeroContent = styled.div`
position: relative;
z-index:10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100%-100px);
color: white;
text-align: left;
padding: 50px;

h1{
    font-size:clamp(1rem, 8vw, 2rem);
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba (0,0,0,0.4);
    text-align: left;
    margin-bottom : 0.8rem;
    text-align: left;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba (0,0,0,0.4);
    text-align: left;

}
`

export const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;

`

export const ArrowButtons = css`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition : 0.3s;
&:hover{
    background: #cd853f;
    transform : scale(1.05);
}
`

export const PrevArrow = styled(IoArrowBack)`
${ArrowButtons}

`
export const NextArrow = styled(IoArrowForward)`
${ArrowButtons}

`

export const Arrow = styled(IoMdArrowForward)`
margin-left:.5rem
`