import styled from "styled-components";
import { motion } from "framer-motion"


export const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`

export const Container = styled.div`
padding: 3rem calc((100vw- 1300px) /2);
display: grid;
grid-template-columns: 1.5fr 4fr;
grid-template-rows: 800px;
@media screen and (max-width:768px){
    grid-template-columns: 2fr;
}
`
export const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
color: white;
padding: 1rem 2rem;
background-image: linear-gradient(0deg,#1f1e1e -40%, #2a82f5 50%, #2a82f5 100% );
border-radius: 0px 10px 10px 0px;
order: ${({ reverse }) => (reverse ? '2' : '1')};

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
    margin-bottom :2rem;

}
`
export const ColumnRight = styled.div`
padding: 1rem 3rem;
order: ${({ reverse }) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};



}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition:all 0.4s linear;

    @media screen and (max-width:768px){
        width: 40vh;
        height: 90%;
        display: flex;
    justify-self: center;
}
    &:hover{
        transition: all 0.4s linear;
        transform : scale(1.04);
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);

    }
}


`