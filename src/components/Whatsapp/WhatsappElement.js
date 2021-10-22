import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";



export const WhatsappContainer = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
  transition: all 0.5s ease;


  &:hover{
      transition: all 0.5s linear ;
      cursor: pointer;
      color: #fff;
      background-color: #25d366;
      width: 65px;
      height: 65px;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
`;

export const WhatsappIcon = styled(IoLogoWhatsapp)`
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    margin: 22px;
    font-size: 1.5rem;
  }
`;
