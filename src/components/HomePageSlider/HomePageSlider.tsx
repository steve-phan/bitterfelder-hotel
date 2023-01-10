import React from "react";
import Image from "next/image";

import { Carousel } from "flowbite-react";

export const HomePageSlider = () => {
  return (
    <Carousel>
      {Array(3)
        .fill("")
        .map((_, index) => {
          return (
            <div
              key={index}
              className="h-screen max-h-carousel min-h-carousel md:max-h-screen md:min-h-screen relative z-10"
            >
              <Image
                alt="Bitterfelder Hotel"
                src={`/background/Bitterfelder-Hotel-${index + 1}.jpeg`}
                style={{
                  objectFit: "cover",
                }}
                fill
                placeholder="empty"
                quality={40}
              />
            </div>
          );
        })}
    </Carousel>
  );
};
