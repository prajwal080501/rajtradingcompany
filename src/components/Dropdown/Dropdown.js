import React from "react";
import { menuData } from "../../Data/MenuData";
import { Button, Button2 } from "../Button/Button";
import { CloseIcon, DropdownContainer, DropdownMenu, DropdownWrapper, Icon, BtnWrap, DropdownLink } from "./DropdownElements";
import useSound from 'use-sound';
import close from "./sounds/close.mp3";


const Dropdown = ({ isOpen, toggle }) => {
  const [pause] = useSound(close);
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} onMouseEnter={pause} />
          </Icon>
          <DropdownWrapper>
              <DropdownMenu>
                  {menuData.map((item, index) => (
                      <DropdownLink to={item.link} kay={index}>{item.title}</DropdownLink>
   ) )}
              </DropdownMenu>
              <BtnWrap>
                  <Button2 style={{color: 'black'}} primary="true" round="true" big="true" to="/contact">Contact Us</Button2>
              </BtnWrap>
          </DropdownWrapper>
          <h5 style={{textAlign: 'center', fontWeight:'700', marginTop: '80px', fontSize: '1rem', color: 'black'}}>Raj Trading Company</h5>
    </DropdownContainer>
  );
};

export default Dropdown;
