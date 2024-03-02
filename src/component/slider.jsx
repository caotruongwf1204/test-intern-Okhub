import React from "react";
import "../css/slider.css";

export default function Slider() {
  return (
    <>
      <div className="relative slider flex items-center justify-center pt-16">
        <div className="absolute top-16 z-10">
          <p className="slider-text text-[#B34B1E] text-[12px] md:text-[16px] font-bold text-center">WECOME TO</p>
          <div className="tour text-5xl font-extrabold">
            <div className="text-[#B34B1E] slider-text text-[24px] md:text-[48px] font-bold text-center">HA GIANG LOOP</div>
            <div className="text-vn md:text-[127px] md:leading-[297px]">Vietnam</div>
          </div>
        </div>
        <div className="slider-img">
          <img
            className="scale-on-scroll"
            src="public/images/slde-3.jpg"
            alt="slider"
          />
        </div>
      </div>
    </>
  );
}
