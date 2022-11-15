import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/AriaILogo.jpeg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { Link } from "react-scroll";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const LinkT = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} style={{ borderRadius: "5px" }} />
            <LogoText>ARIAI</LogoText>
          </LogoContainer>
          <LinksContainer>
            <LinkT href="">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Services we provide
              </Link>
            </LinkT>
            <LinkT href="">
              <Link
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                What does our Client-base think of us?
              </Link>
            </LinkT>
            <LinkT href="">
              <Link
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Talk to us
              </Link>
            </LinkT>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/31555106" target="_blank">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/hrushikesh_3337" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCLf-xF3Yv-hD3jdfas8WftQ" target="_blank">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, ARIAI Intelligen. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
