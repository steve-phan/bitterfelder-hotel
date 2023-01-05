import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <></>,
  nextArrow: <></>,
};

export const HomePageSlider = () => {
  return (
    <Slider {...settings}>
      <div className="h-screen relative z-10">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-1.jpg`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
      <div className="h-screen relative z-10">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-2.jpg`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
      <div className="h-screen relative z-10">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-3.jpg`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
      <div className="h-screen relative z-10">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-4.jpg`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
      <div className="h-screen relative z-10">
        <Image
          alt="Bitterfelder Hotel"
          src={`/background/Bitterfelder-Hotel-5.jpg`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>
    </Slider>
  );
};
