import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function Slider() {
  return (
    <Splide
      hasTrack={false}
      aria-label="..."
      options={{
        autoplay: "pause",
        type: "loop",
        arrows: true,
        pagination: false,
        perPage: 1,
        // autoScroll: {
        //   pauseOnHover: false,
        //   pauseOnFocus: false,
        //   rewind: false,
        //   speed: 1,
        // },
      }}
      // extensions={{ AutoScroll }}
    >
      <SplideTrack>
        <SplideSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
            alt="Image 2"
          />
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">Prev</button>
        <button className="splide__arrow splide__arrow--next">Next</button>
      </div>
    </Splide>
  );
}

export default Slider;
