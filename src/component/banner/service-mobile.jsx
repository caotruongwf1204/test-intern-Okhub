import Button from "../button";
import "../../css/service.css";
import IconTour from "../icon-tour";
import IconSelf from "../icon-self";
import ServiceNumber from "./service-number";
import { useState } from "react";

export default function ServiceMobile() {
  const [totalPrice, setTotalPrice] = useState(299);

  const handleTotalChange = (newPassengerCount) => {
    const newTotalPrice = 299 + (newPassengerCount - 1) * 100;
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="service-mobile flex items-center justify-between absolute bg-[#fff] p-5">
      <div className="service-select  flex flex-col lg:flex-row">
        <div className="select-mobile-tour flex items-center">
          <div>
            <p className="text-[#727272] text-xs mb-3">TOUR</p>
            <div className="flex">
              <IconTour></IconTour>
              <select className="text-sm font-bold cursor-pointer">
                <option value="">HAGIANG LOOP TOUR (3N3D)</option>
                <option value="">HAGIANG LOOP TOUR (4N4D)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex py-8 justify-between">
          <div className="select-driving flex items-center">
            <div>
              <p className="text-[#727272] text-xs mb-3">SELF - DRIVING</p>
              <div className="flex">
                <IconSelf></IconSelf>
                <ServiceNumber onChange={handleTotalChange}></ServiceNumber>
              </div>
            </div>
          </div>
          <div className="select-driver flex items-center">
            <div>
              <p className="text-[#727272] text-xs mb-3">PRIVATE DRIVER</p>
              <div className="flex">
                <IconSelf></IconSelf>
                <ServiceNumber onChange={handleTotalChange}></ServiceNumber>
              </div>
            </div>
          </div>
        </div>
      <Button>
        <h5 className="service-h5">${totalPrice}</h5>
        <p className="service-subtitle">BOOK NOW</p>
      </Button>
      </div>
    </div>
  );
}
