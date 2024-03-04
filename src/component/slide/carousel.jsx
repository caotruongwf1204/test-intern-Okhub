import React, { useState } from "react";
import Item from "./item";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNextClick = () => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="carousel">
      
      <div className="carousel-container">
        {items.map((item, i) => (
          <Item
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            key={i}
            active={i === index}
            {...item}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
