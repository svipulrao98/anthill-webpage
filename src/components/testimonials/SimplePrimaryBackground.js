import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg"

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100 rounded`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "Some of our Awesome Clients",
  description = "We attempt to maximize the profits with minimum possible liability, & our clients appreciate that!",
}) => {
  const [testimonials, setPosts] = useState([
    // {
    //   customerName: "Client Name",
    //   plan: "",
    //   imgSrc: "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
    //   quote: "Testimony"
    // }
    {
      customerName: "Shailendra Gupta",
      imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      plan: "Recurring Return",
      testimony: "I have always looked for investing in the stock markets, but my busy schedule hasn't permitted me to do so, I invested in the 'Equity Rich' plan, now I earn & learn as well!"
    },
    {
      customerName: "Vinayak Rao",
      imgSrc: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/07/19/Pictures/ht-pune_9e4912ec-aa15-11e9-bdb2-acd0277ecbef.JPG",
      plan: "Recurring Return",
      testimony: "I had initially invested a small chunk of my wealth with there folks, but over the timeI was able to gain some trust, resulting in me investing some more."
    },
    {
      customerName: "Vaishnavee Marathe",
      imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      plan: "Recurring Return",
      testimony: "I belong to a tech background, anthill has given me an opportunity to safely experiment with my career, without a fear of loosing a stable income."
    },
    {
      customerName: "Rupesh Surve",
      imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      plan: "Equity Rich",
      testimony: "I have always been a passive trader, however with this equity rich plan I am gaining returns on an already gaining investment."
    },
    {
      customerName: "Sameer Pendse",
      imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      plan: "Recurring Return",
      testimony: "With very low returns for FDs & SB accounts, I had been investing in SIPs & Mutual Funds, I gave Anthill a shot about a year ago, now I've more than doubled my investment, I guess that's telling something."
    }
  ]);
  useEffect(() => {
    let headers = new Headers();

    fetch('https://anthill-python-backend.herokuapp.com/api/v1/listCustomers', {
      mode: "cors",
      method: "GET",
      headers: headers,

    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.testimony}
                </Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerImage src={testimonial.imgSrc} />
                <CustomerNameAndProfileContainer>
                  <CustomerName>
                    {testimonial.customerName}
                  </CustomerName>
                  <CustomerProfile>
                    {testimonial.plan}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon className="icon" onClick={sliderRef?.slickNext} />
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
