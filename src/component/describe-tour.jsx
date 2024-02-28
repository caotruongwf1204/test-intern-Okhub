import React from "react";
import Describe from "./decribe";

export default function DescribeTour() {
  return (
    <main>
      <div data-aos="fade-right" className="describe grid grid-cols-2 gap-4 text-[#FFF0EA] pt-8">
        <Describe>SUPPORT LOCAL - SUSTAINABLE TRAVEL</Describe>
        <Describe>FREE 100% CANCELLATION</Describe>
        <Describe>DAILY DEPARTURES</Describe>
        <Describe>NO HAPPY - FULL REFUND</Describe>
      </div>

      <div className="pt-8 text-[#727272]">
        <p className="text-xs">
          The 3 Days Epic Ha Giang Loop Tour with easy rider organized by{" "}
          <strong className="text-[#000]">Vietnam Cheers Hostel</strong> is a must in Vietnam for any
          traveller. It is considered a highlight of South East Asia.
        </p>
        <div className="pt-8">
          <p className="text-xs">
            Explore <strong className="text-[#000]">Ma Pi Leng</strong>, one of The Big Four Passes in
            Vietnam, through thousands of conical limestone peaks as well as
            deep and meandering valleys. Party dinner, waterfall and local le at
            authentic <strong className="text-[#000]">Cheers Du Gia Homestay</strong>. will be the
            unique experience also. This is designed for adventure-seekers —
            those who want to experience the biggest challenge Vietnam has to
            offer in a safe environment with our experienced easy riders.
          </p>
        </div>
      </div>
    </main>
  );
}
