import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const GalleryCard = styled.div`
`;
export const GalleryContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 53%;
  column-width: 33%;
  padding: 30px;
  margin: 10px;
  background-color: #f0eeeb;
  border-radius: 10px;
  @media screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media screen and (max-width: 480px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`;
export const Image = styled.img`
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
  cursor: pointer;
  margin-bottom: 13px;
  margin-top: 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px){
      width: 60vh;
      height: 20vh;
  }
  &:hover {
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    opacity: 0.9;
    border-radius: 10px;s
  }
`;


export const GalleryTitle = styled.h2`
    font-size: 1.9rem;
    text-align: left;
    font-weight: 600;
    padding: 15px;
    margin: 10px 0px 0px 20px;
    font-family: 'Arial', sans-serif;
    @media screen and (max-width:768px){
      font-size: 1rem;
      letter-spacing: 1px;
    }
`;

export const GalleryHeader = styled.div`
width: 100vw;
height: fit-content;
display: flex;
justify-content: space-between;
align-items: center;


`;


export const PhotoCount = styled.p`
width: fit-content;
height: fit-content;
padding: 10px;
background-color: #257bf5;
color:white;
display: flex;
border-radius: 10px;
font-weight: 600;
font-sizw: 1rem;
margin: 35px;

@media screen and (max-width: 768px){
  width: 50vw;
}
`;


export const CardTitle = styled.h2`
font-size: 1rem;
tet-align-left;
`;

