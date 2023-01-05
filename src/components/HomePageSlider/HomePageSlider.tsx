import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoplay: true,
  fade: true,
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
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <div
              key={index}
              className="h-screen max-h-carousel md:max-h-screen relative z-10"
            >
              <Image
                alt="Bitterfelder Hotel"
                src={`/background/Bitterfelder-Hotel-${index + 1}.jpg`}
                style={{
                  objectFit: "cover",
                }}
                fill
                quality={45}
              />
            </div>
          );
        })}
    </Slider>
  );
};
