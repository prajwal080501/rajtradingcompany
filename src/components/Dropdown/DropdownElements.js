import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
border-radius: 0% 0% 5% 5%;
height: 100%;
background: #00000;
backdrop-filter:blur(50px) grayscale(0.4);
display; grid;
align-items: center;
border-radius: 0% 0% 5% 5%;
top: 0;
left: 0;
transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top :${({isOpen}) => (isOpen ? '0' : '-100%')};;

`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;


`

export const CloseIcon = styled(FaTimes)`
color: #000d1a

`

export const DropdownWrapper = styled.div`


`

export const DropdownMenu = styled.div`
display :grid;
grid-template-column: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 2rem;
transition; all 0.3s linear;
margin-top: 4rem;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 75px);

}
`

export const DropdownLink = styled(Link)`
display: flex;
color: #000;
align-items: center;
justify-content: center;
text-decoration: none;
font-weight: 500;
font-size: 1.5rem;
list-style: none;
cursor: pointer;
transition : all 0.4s ease-in-out;
font-weight: 800;


&:hover{
    color: white;
    font-size: 2rem;
    font-weight: 800;
}
`
export const BtnWrap = styled.div`
display: flex;
justify-content: center;
margint-bottom: 10px;

`
