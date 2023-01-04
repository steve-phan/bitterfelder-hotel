import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export const HomePageSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <div key={index} className="h-screen relative z-10">
              <Image
                alt="Bitterfelder Hotel"
                src={`/background/Bitterfelder-Hotel-${index + 1}.jpg`}
                fill
              />
            </div>
          );
        })}
    </Slider>
  );
};
