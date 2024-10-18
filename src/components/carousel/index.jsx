import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FirstImage from "../../assets/images/carousel-img-1.svg";
import SecondImage from "../../assets/images/carousel-img-2.svg";
import ThirdImage from "../../assets/images/carousel-img-3.svg";

export const CustomCarousel = () => {
  return (
    <div
      className="carousel-wrapper"
      // style={{ maxWidth: "600px", margin: "auto" }}
    >
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={4000}
        stopOnHover
        swipeable
        useKeyboardArrows
      >
        <div className="w-full h-[17rem]">
          <img
            src={FirstImage}
            alt="First Slide"
            className="w-full h-full object-cover"
          />
          <div className="carousel-caption font-inter text-[#fff] absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/0 to-black/50">
            <div className="flex flex-col items-start gap-2 px-3 pb-[1.6rem]">
              <h3 className="font-semibold text-[0.75rem]">
                Latest News & Updates
              </h3>
              <p className="text-left text-[0.75rem]">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="w-full h-[17rem]">
          <img
            src={SecondImage}
            alt="Second Slide"
            className="w-full h-full object-cover"
          />
          <div className="carousel-caption font-inter text-[#fff] absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/0 to-black/50">
            <div className="flex flex-col items-start gap-2 px-3 pb-[1.6rem]">
              <h3 className="font-semibold text-[0.75rem]">
                Latest News & Updates
              </h3>
              <p className="text-left text-[0.75rem]">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="w-full h-[17rem]">
          <img
            src={ThirdImage}
            alt="Third Slide"
            className="w-full h-full object-cover"
          />
          <div className="carousel-caption font-inter text-[#fff] absolute bottom-0 left-0  w-full bg-gradient-to-b from-black/0 to-black/50">
            <div className="flex flex-col items-start gap-2 px-3 pb-[1.6rem]">
              <h3 className="font-semibold text-[0.75rem]">
                Latest News & Updates
              </h3>
              <p className="text-left text-[0.75rem]">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
