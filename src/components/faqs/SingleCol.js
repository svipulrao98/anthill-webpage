import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { Link } from "react-scroll";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const ContactUsButton = tw.button`w-full sm:w-64 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;



export default ({
  subheading = "FAQS",
  heading = "You have Questions ?"
}) => {
  const [faqs, setFAQs] = useState([
    // {
    //   question: "Question?",
    //   answer: "No Questions As of yet"
    // }
    {
      answer: "If you are already investing into equity markets , then you are holding large number of shares which you are not planning to sell any time soon. We are committed to earn you some handsome return on your investments in your account.",
      question: "What is Our Equity Rich Plan?"
    },
    {
      answer: "We are also into PMS service which would earn you minimum fixed returns per month on the investment made by the client as per the agreed upon terms.",
      question: "What is the Recurring Return Plan?"
    },
    {
      answer: "We would pledge your holding stocks with your broker to avail the benefits of collateral margin which our fund managers would utilise to earn you an handsome return.",
      question: "How does the Equity Rich plan work?"
    },
    {
      answer: "As soon as the investment is processed, NSE Nifty BEES are bought by our team which works as a security for the given tenure - it is an almost 0 risk investment. This investment will be sent to you within the next 7 trading days. Apart from this, we have our own safe fund that would ensure your gains. Our Algorithms are designed such that only our non-liable capital would be risked. To get more info about NSE NIFTY BEES head on to: https://www.nseindia.com/get-quotes/equity?symbol=NIFTYBEES",
      question: "What is the security provided for the Recurring return plan?"
    },
  ]);
  useEffect(() => {
    let headers = new Headers();

    fetch('https://anthill-python-backend.herokuapp.com/api/v1/listFAQs', {
      mode: "cors",
      method: "GET",
      headers: headers,

    })
      .then((response) => response.json())
      .then((data) => {
        setFAQs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
          < ContactUsButton type="submit">
            <Link
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Have more questions?
            </Link>
          </ContactUsButton>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
