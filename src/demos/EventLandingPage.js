import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Faq2 from "components/faqs/SingleCol.js";
import CompanyStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial1 from "components/testimonials/SimplePrimaryBackground.js";
// import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import OurTeam from "components/cards/ProfileThreeColGrid.js"

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <CompanyStats />
      {/* <Features /> */}
      <div id="products">
        <Blog />
      </div>
      {/* <Testimonial /> */}
      <div id="testimonial">
        <Testimonial1 />
      </div>
      {/* <div id="contactus">
        <ContactUsForm />
      </div> */}
      <OurTeam />
      <div id="faqs">
        <Faq2 />
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
