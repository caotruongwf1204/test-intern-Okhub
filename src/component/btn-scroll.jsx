import React, { useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  window.onscroll = function () {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed btn-scroll bottom-[290px] p-4 rounded-full right-[38px] z-50 border border-solid border-[#FC692A] hover:bg-[#fff]"
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline" : "none" }}
    >
      <svg
        width="10"
        height="25"
        viewBox="0 0 10 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.84385 0.645019C5.56289 -0.215008 4.43711 -0.215007 4.15615 0.64502L0.0517597 13.2088C-0.153729 13.8378 0.278192 14.4973 0.895609 14.4973L9.10439 14.4973C9.72181 14.4973 10.1537 13.8378 9.94824 13.2088L5.84385 0.645019Z"
          fill="#FC692A"
        />
        <path
          d="M5.00134 23.164C6.35455 23.164 7.5808 21.9545 7.5808 20.2968C7.5808 18.6392 6.35455 17.4297 5.00134 17.4297C3.64813 17.4297 2.42187 18.6392 2.42187 20.2968C2.42187 21.9545 3.64813 23.164 5.00134 23.164Z"
          stroke="#FC692A"
          stroke-width="2"
        />
      </svg>
    </button>
  );
}
