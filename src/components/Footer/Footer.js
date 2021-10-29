import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
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
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan
            style={{
              color: "#fff",
              fontWeight: "800",
              fontStyle: "cursive",
            }}
          >
            Raj Trading Company 2021©
          </Slogan>
          
        </CompanyContainer>
        
      </SocialIconsContainer>
      <BackToTopButton>Back</BackToTopButton>
      <Slogan
            style={{
              color: "#fff",
              fontWeight: "800",
              fontStyle: "cursive",
          textAlign: 'center',
              textShadow: '1px 1px 5px #000'
            }}
          > Developed with ❤️ by <strong> <a target="_blank" href="https://github.com/"style={{textDecoration: 'none', color: 'orange'}} href="https://prajwalladkat.tech">Prajwal Ladkat</a> </strong> .{" "}
          </Slogan>
    </FooterWrapper>
  );
};

export default Footer;
