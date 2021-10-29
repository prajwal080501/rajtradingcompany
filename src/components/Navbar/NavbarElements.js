import styled, { css } from "styled-components/macro";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import cursor from "./cursor.png";
export const Nav = styled.nav`
margin-top: 0%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(30px) grayscale(5%);

`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: url(${cursor}), auto;
  padding: 0 1rem;
  height: 100%;
  font-weight: 700;
  text-decoration: none;
  transition : all 0.5s ease;
 
  @media screen and (max-width:768px){
    margin-right:2px;
    letter-spacing:1px;
    font-size: 1rem;
    margin-left:-6px
  }
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: white;
  font-style: italic;
  font-weight: 900;
  font-size: 1.3rem;
  color: white;
  
`;

export const MenuBars = styled(FaBars)`
display: none;


@media screen and (max-width: 768px){
    display: block;
    color:  white;
    height:30px;
    width: 30px;
    cursor: url("./cursor.png"), auto;    
    position: absolute;
    margin-bottom: auto;
    margin-top: auto;
    right: 0;
    transform: translate(-50%,25%);
    font-size: 1rem;
}
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenuLinks = styled(Link)`
  ${NavLink}
  list-style: none;
  text-decoration: none;
  color: white;
  font-style: bold;

  &:hover{
   color: #000d1a;
   border-radius: 10px;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;