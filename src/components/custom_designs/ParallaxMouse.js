import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default () => (
  <>
    <MouseParallax>
      <p>I'm reacting to mouse move</p>
    </MouseParallax>

    <ScrollParallax>
      <p>I'm reacting to scroll</p>
    </ScrollParallax>
  </>
);
