import React, { useState } from "react";
import "../../css/slide.css";
import Carousel from "./carousel";
import SlideSwiper from "./slide-swiper";

const slider = [
  {
    image: "/images/5fa2bd2f8d95495cc70a12ca7239c9d7.png",
    title: "H'MONG TEAM",
    description:
      "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
    size: 15,
    transport: "motorbike",
    trip: 154,
  },
  {
    image: "/images/fec83a4e31b9f20e5253d7e32d05ea1a.png",
    title: "FLY TEAM",
    description:
      "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
    size: 20,
    transport: "motorbike",
    trip: 158,
  },
  {
    image: "/images/0b907f8732824504abdb9d29c4ed0114.png",
    title: "TAY TEAM",
    description:
      "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
    size: 10,
    transport: "motorbike",
    trip: 124,
  },
];

export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="container">
          <div className="slide-header flex justify-between">
            <div className="slide-title">
              <span className="text-[#B34B1E] leading-[16px] text-[16px] font-extrabold">
                CHEERS
              </span>
              <h1 className="text-[48px] leading-[48px] text-[#B34B1E] font-bold">
                FAMILY
              </h1>
            </div>

            <div className="slide-nav flex items-center justify-center">
              <ul className="w-full flex justify-between gap-10 font-semibold text-[14px]">
                <li
                  onClick={() => handleActive(0)}
                  className={`li-slide whitespace-nowrap text-center ${
                    activeIndex === 0 ? "active" : ""
                  }`}
                >
                  TOUR LEADER
                </li>
                <li
                  onClick={() => handleActive(1)}
                  className={`li-slide whitespace-nowrap text-center ${
                    activeIndex === 1 ? "active" : ""
                  }`}
                >
                  SPECIALIST
                </li>
                <li
                  onClick={() => handleActive(2)}
                  className={`li-slide whitespace-nowrap text-center ${
                    activeIndex === 2 ? "active" : ""
                  }`}
                >
                  LOCAL HOST
                </li>
                <li
                  onClick={() => handleActive(3)}
                  className={`li-slide whitespace-nowrap text-center ${
                    activeIndex === 3 ? "active" : ""
                  }`}
                >
                  RIDER TEAM
                </li>
              </ul>
            </div>
          </div>
          <div className={`slide-slider ${activeIndex === 0 ? "active" : ""}`}>
            <Carousel items={slider}></Carousel>
          </div>

          <div className={`slide-slider-user pt-4 ${activeIndex === 1 ? "active" : ""}`}>
            <SlideSwiper></SlideSwiper>
          </div>
        </div>
      </div>
    </>
  );
}
