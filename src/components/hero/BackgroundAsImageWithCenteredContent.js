import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import CustomParticles from "components/custom_designs/CustomParticles";

import Header from "../headers/light.js";
import { Link } from "react-scroll";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading1 = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Heading2 = styled.h2`
  ${tw`text-2xl text-center sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-100 leading-snug -mt-12 sm:mt-0`}
  span {
    ${tw`inline-block mt-1`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  // const navLinks = [
  //   <NavLinks key={1}>
  //     <NavLink href="">
  //       <Link
  //         activeClass="active"
  //         to="products"
  //         spy={true}
  //         smooth={true}
  //         offset={-100}
  //         duration={500}
  //       >
  //         Services
  //       </Link>
  //     </NavLink>
  //     <NavLink href="">
  //       <Link
  //         activeClass="active"
  //         to="testimonial"
  //         spy={true}
  //         smooth={true}
  //         offset={-100}
  //         duration={500}
  //       >
  //         Testimonials
  //       </Link>
  //     </NavLink>
  //     <NavLink href="">
  //       <Link
  //         activeClass="active"
  //         to="contactus"
  //         spy={true}
  //         smooth={true}
  //         offset={-100}
  //         duration={500}
  //       >
  //         Contact Us
  //       </Link>
  //     </NavLink>
  //     <NavLink href="">
  //       <Link
  //         activeClass="active"
  //         to="faqs"
  //         spy={true}
  //         smooth={true}
  //         offset={-100}
  //         duration={500}
  //       >
  //         FAQs
  //       </Link>
  //     </NavLink>
  //   </NavLinks>
  // ];

  return (
    <Container>
      <CustomParticles />
      <OpacityOverlay />
      <HeroContainer>
        <Header />
        <Content>
          <Heading1>
            ANTHILL
          </Heading1>
          <br />
          <br />
          <Heading2>
            LET YOUR MONEY WORK FOR YOU.
          </Heading2>
          <PrimaryAction>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Explore the Plans
            </Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
