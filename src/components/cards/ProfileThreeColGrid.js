import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
// import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100 rounded`;

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3 text-gray-500`
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-gray-100`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-300`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-600 hocus:text-gray-100 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Management",
  subheading = "Driven to deliver, Client first, are our biggest traits.",
  description = "Our systems & strategies are backed by our innovative analysis of past and real-time data, which is backed by our strong expertise in the technological domain, topped with the tried & tested old-school chart analysis. This makes it hard for us to lose our positions.",
}) => {
  const [cards, setCards] = useState([
    // {
    //   imageSrc: "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
    //   position: "",
    //   name: "",
    //   links: [
    //     {
    //       url: "https://twitter.com",
    //       icon: TwitterIcon,
    //     },
    //     {
    //       url: "https://linkedin.com",
    //       icon: LinkedinIcon,
    //     },
    //   ],
    // },
    {
      imageSrc: "https://drive.google.com/uc?export=view&id=1DhEfg5vnKOBGF1yaLMgnvqwd2EfCkhd_",
      position: "Co-Founder, CEO",
      name: "Vipul Rao",
      links: [
        {
          url: "https://twitter.com/vips1998",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/vipul-rao-20a7541b6/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://drive.google.com/uc?export=view&id=1KQf1vGfdst3b1lIp-D3LpX_NlDP1GNCF",
      position: "Co-Founder, Chief Trading Officer",
      name: "Hrushikesh Patel",
      links: [
        {
          url: "https://twitter.com/hrushikesh_3337",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/hrushikesh-patel-b542b1150/",
          icon: LinkedinIcon,
        },
      ],
    },
  ]);
  useEffect(() => {
    let headers = new Headers();

    fetch('https://anthill-python-backend.herokuapp.com/api/v1/listTeam', {
      mode: "cors",
      method: "GET",
      headers: headers,

    })
      .then((response) => response.json())
      .then((data) => {
        for (let d = 0; d < data.length; d++) {
          data[d]["links"] = [
            {
              url: data[d]["twitter"],
              icon: TwitterIcon
            },
            {
              url: data[d]["linkedin"],
              icon: LinkedinIcon
            },
          ]
        }
        setCards(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading>}
          {subheading && <Subheading>{subheading}</Subheading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url} target="_blank" rel="noreferrer">
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
