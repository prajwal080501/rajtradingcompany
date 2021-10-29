import styled from "styled-components";
import { Link } from "react-router-dom";
import cursor from "../Navbar/cursor.png";

export const Button = styled(Link)`
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
cursor: url(${cursor}), auto;

&:hover{
    transform: translateY(-4px);
}
`
export const Button2 = styled(Link)`
background: ${({ primary }) => (primary ? '#ed8e2f' : 'CD853F')};
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
    transition: all 0.5s ease;
    transform: translateY(-4px);
}
@media screen and (max-width:768px){
    width: 100%;
    display: flex;
    align-self: center;
}
`
export const Button3 = styled.button`
background: ${({ primary }) => (primary ? '#ed8e2f' : 'CD853F')};
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
    transition: all 0.5s ease;
    transform: translateY(-4px);
}
@media screen and (max-width:768px){
    width: 100%;
    display: flex;
    align-self: center;
}
`