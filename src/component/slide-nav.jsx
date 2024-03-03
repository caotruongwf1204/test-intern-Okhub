import React from "react";


const SlideNavigation = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="carousel-navigation">
      <div className="carousel-navigation-prev" onClick={onPrevClick}>
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.03774 7.31019L17.6742 1.43852C18.1481 1.27124 18.645 1.62284 18.645 2.12543L18.645 13.8688C18.645 14.3714 18.1481 14.723 17.6742 14.5557L1.03774 8.68402C0.389734 8.45532 0.389732 7.5389 1.03774 7.31019Z"
            fill="white"
            stroke="white"
            stroke-width="1.10347"
          />
          <circle
            cx="26.8798"
            cy="7.99901"
            r="4.01725"
            stroke="white"
            stroke-width="2.20693"
          />
        </svg>
      </div>
      <div className="carousel-navigation-next" onClick={onNextClick}>
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9623 7.43519L14.3258 1.56352C13.8519 1.39624 13.355 1.74784 13.355 2.25043L13.355 13.9938C13.355 14.4964 13.8519 14.848 14.3258 14.6807L30.9623 8.80902C31.6103 8.58032 31.6103 7.6639 30.9623 7.43519Z"
            fill="white"
            stroke="white"
            stroke-width="1.10347"
          />
          <circle
            cx="5.12072"
            cy="5.12072"
            r="4.01725"
            transform="matrix(-1 1.7485e-07 1.74841e-07 1 10.241 3.0033)"
            stroke="white"
            stroke-width="2.20693"
          />
        </svg>
      </div>
    </div>
  );
};

export default SlideNavigation;
