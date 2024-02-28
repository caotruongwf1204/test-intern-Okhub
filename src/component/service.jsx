import Button from "../component/button";
import "../css/service.css";
import IconTour from "../component/icon-tour";
import IconSelf from "./icon-self";
import ServiceNumber from "./service-number";
import { useState } from "react";


export default function Service() {

  const [totalPrice, setTotalPrice] = useState(299);

  const handleTotalChange = (newPassengerCount) => {
    const newTotalPrice = 299 + (newPassengerCount - 1) * 100;
    setTotalPrice(newTotalPrice);
  };
  
  return (
    <div className="service flex items-center justify-between absolute bg-[#fff] px-8 py-5">
      <div className="service-select flex">
        <div className="select-tour flex items-center">
          <div>
            <p className="text-[#727272] text-sm mb-3">TOUR</p>
            <div className="flex">
              <IconTour></IconTour>
              <select className="font-bold cursor-pointer">
                <option value="">HAGIANG LOOP TOUR (3N3D)</option>
                <option value="">HAGIANG LOOP TOUR (4N4D)</option>
              </select>
            </div>
          </div>
          <div className="service-line"></div>
        </div>
        <div className="select-driving flex items-center">
          <div>
            <p className="text-[#727272] text-sm mb-3">SELF - DRIVING</p>
            <div className="flex">
              <IconSelf></IconSelf>
              <ServiceNumber onChange={handleTotalChange}></ServiceNumber>
            </div>
          </div>
          <div className="service-line"></div>
        </div>
        <div className="select-driver flex items-center">
          <div>
            <p className="text-[#727272] text-sm mb-3">PRIVATE DRIVER</p>
            <div className="flex">
              <IconSelf></IconSelf>
              <ServiceNumber  onChange={handleTotalChange}></ServiceNumber>
            </div>
          </div>
        </div>
      </div>
      <Button>
        <h5 className="service-h5">${totalPrice}</h5>
        <p className="service-subtitle">BOOK NOW</p>
      </Button>
    </div>
  );
}
