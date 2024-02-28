import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function ServiceNumber({ onChange }) {
  const [updateCount, setUpdateCount] = useState(1);

  const increaseCount = () => {
    const newCount = updateCount + 1;
    setUpdateCount(newCount);
    onChange(newCount);
  };
  

  const decreaseCount = () => {
    if (updateCount > 1) {
      const newCount = updateCount - 1;
      setUpdateCount(newCount);
      onChange(newCount);
    }
  };
  return (
    <div className="flex">
      <span className="font-bold">{updateCount} pax</span>
      <div className="flex flex-col items-center pl-8">
        <button onClick={increaseCount}>
          <IoIosArrowUp />
        </button>
        <button onClick={decreaseCount}>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}
