import React, { useState } from "react";
import { GiCircleClaws } from "react-icons/gi";
import {AiFillFormatPainter } from 'react-icons/ai'
import {
  Logo,
  MenuBars,
  Nav,
  NavBtn,
  NavMenu,
  NavMenuLinks,
} from "./NavbarElements";
import { menuData } from "../../Data/MenuData";
import { Button, Button2 } from "../Button/Button";
import useSound from "use-sound";
import click from "./sounds/pop-down.mp3";
import "./Navbar.css";

import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [play] = useSound(click, { volume: 0.15 });
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const [menubar, setMenuBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  
  const changeLogoBackground = () => {
    if (window.scrollY >= 80) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };
  const changeMenuBarBackground = () => {
    if (window.scrollY >= 80) {
      setMenuBar(true);
    } else {
      setMenuBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeLogoBackground);
  window.addEventListener("scroll", changeMenuBarBackground);
  return (
    <>
      <Nav className={navbar ? "navbar active" : "navbar"}>
        <Logo className={logo ? "logo active" : "logo"} to="/">
          {" "}
          <AiFillFormatPainter
            style={{ marginRight: "20px", color: "white", fontWeight: "900" }}
          />
          Raj Trading Company
        </Logo>
        <MenuBars
          className={menubar ? "menubar active" : "menubar"}
          onClick={toggle}
          onMouseEnter={play}
        />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks
              className={navbar ? "navbar menuactive" : "navbar"}
              onClick={play}
              to={item.link}
              key={index}
            >
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" to="/contact">
            Contact Us
          </Button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;