import React, {useEffect} from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Aos from "aos";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  BackToTopButton,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  LinkedinSocialIcons,
  InstagramSocialIcons,
  GithubSocialIcons,
} from "./FooterElements";
import Map from "../Map/Map";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <FooterWrapper>
      <LinkList data-aos="fade-right" data-aos-duration="700">
        <LinkColumn>
          <LinkTitle style={{ color: "#f0e79d"  }}>Call</LinkTitle>
          <LinkItem  href="tel:+919922991836">
            +919922991836
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{ color: "#f0e79d" }}>Email</LinkTitle>
          <LinkItem
           
            href="mailto:raj_tradingcompany@yahoo.co.in"
          >
            raj_tradingcompany@yahoo.co.in
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <Slogan
            style={{
              width: "40vw",
              color: "#fff",
              fontWeight: "800",
          fontStyle: "cursive",
              margin:"auto",
          textAlign: 'center',
              textShadow: '1px 1px 5px #000'
            }}
          >
            Copyright © 2021 Raj Trading Company.
          </Slogan>
      <Slogan
        style={{
              width: "50vw",
              color: "#fff",
              fontWeight: "800",
          fontStyle: "cursive",
              margin:"auto",
          textAlign: 'center',
          textShadow: '1px 1px 5px #000',
              position: "relative",
          bottom: "0",
          marginBottom: "-20px",
            }}
          > Developed with ❤️ by <strong> <a target="_blank" href="https://github.com/"style={{textDecoration: 'none', color: 'orange'}} href="https://prajwalladkat.tech">Prajwal Ladkat</a> </strong> .{" "}
      </Slogan>
    </FooterWrapper>
  );
};

export default Footer;
