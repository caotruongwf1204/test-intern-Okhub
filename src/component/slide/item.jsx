import React from "react";
import Content from "./content";
import SlideNavigation from "./slide-nav";

const Item = ({
  image,
  title,
  description,
  size,
  transport,
  trip,
  active,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div
      className="carousel-item justify-between"
      style={{
        display: active ? "flex" : "none",
      }}
    >
      <Content title={title} description={description} size={size} transport={transport} trip={trip}></Content>
      <div className="carousel-item-img relative w-7/12">
        <img
          className="w-full object-cover object-bottom h-full rounded-2xl"
          src={image}
          alt={title}
        />
        <SlideNavigation
          onPrevClick={onPrevClick}
          onNextClick={onPrevClick}
        ></SlideNavigation>
      </div>
    </div>
  );
};

export default Item;
