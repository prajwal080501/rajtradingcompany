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
          <LinkTitle style={{ color: "#f0e79d" }}>Call</LinkTitle>
          <LinkItem style={{ fontSize: "0.8rem" }} href="tel:+918329399576">
            +918329399576
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{ color: "#f0e79d" }}>Email</LinkTitle>
          <LinkItem
            style={{ fontSize: "0.8rem", marginLeft: "38px" }}
            href="mailto:contact@jsmastery.com"
          >
            rajan.ladkat@gmail.com
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
            Adv Rajan Ladkat 2021©
          </Slogan>
          
        </CompanyContainer>
        <SocialContainer>
          <LinkedinSocialIcons href="https://www.linkedin.com/in/prajwal-ladkat-0389931a7/">
            <AiFillLinkedin />
          </LinkedinSocialIcons>
          <InstagramSocialIcons href="https://www.instagram.com/prajwalladkat0805/">
            <AiFillInstagram />
          </InstagramSocialIcons>
        </SocialContainer>
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
          > Developed with ❤️ by <strong> Prajwal Ladkat</strong> .{" "}
          </Slogan>
    </FooterWrapper>
  );
};

export default Footer;
