import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

export default function SlideSwiper() {
  return (
    <>
      <Swiper
        breakpoints={{
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        loop={true}
        className="mySwiper z-0"
      >
        <SwiperSlide>
          <div className="slide-user flex items-center justify-center">
            <img
              className="object-cover relative rounded-2xl"
              src="/images/user1.png"
              alt="user"
            />
            <div className="bg-[#B34B1E] rounded-2xl px-4 py-4 text-[#fff] opacity-90 absolute grid justify-center items-center bottom-[25px] left-[25px] right-[25px]">
              <p className="text-center">Ms. Thao Nguyen</p>
              <p className="text-center">Tour Leader 3 years of experience</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-user flex items-center justify-center">
            <img
              className="object-cover relative rounded-2xl"
              src="/images/user2.png"
              alt="user"
            />
            <div className="bg-[#B34B1E] rounded-2xl px-4 py-4 text-[#fff] opacity-90 absolute grid justify-center items-center bottom-[25px] left-[25px] right-[25px]">
              <p className="text-center">Ms. Thao Nguyen</p>
              <p className="text-center">Tour Leader 3 years of experience</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-user flex items-center justify-center">
            <img
              className="object-cover relative rounded-2xl"
              src="/images/user3.png"
              alt="user"
            />
            <div className="bg-[#B34B1E] rounded-2xl px-4 py-4 text-[#fff] opacity-90 absolute grid justify-center items-center bottom-[25px] left-[25px] right-[25px]">
              <p className="text-center">Ms. Thao Nguyen</p>
              <p className="text-center">Tour Leader 3 years of experience</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-user flex items-center justify-center">
            <img
              className="object-cover relative rounded-2xl w-full h-full"
              src="/images/user4.png"
              alt="user"
            />
            <div className="bg-[#B34B1E] rounded-2xl px-4 py-4 text-[#fff] opacity-90 absolute grid justify-center items-center bottom-[25px] left-[25px] right-[25px]">
              <p className="text-center">Ms. Thao Nguyen</p>
              <p className="text-center">Tour Leader 3 years of experience</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-user flex items-center justify-center">
            <img
              className="object-cover relative rounded-2xl"
              src="/images/user3.png"
              alt="user"
            />
            <div className="bg-[#B34B1E] rounded-2xl px-4 py-4 text-[#fff] opacity-90 absolute grid justify-center items-center bottom-[25px] left-[25px] right-[25px]">
              <p className="text-center">Ms. Thao Nguyen</p>
              <p className="text-center">Tour Leader 3 years of experience</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
