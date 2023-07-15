import React, { useState } from "react";
import "./index.css";
import { Button } from "antd";

const Header = () => {
  const makeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [show, change] = useState(false);

  const handleClick = () => {
    change(!show);
  };

  return (
    <div className="flex flex-col gap-10">
      {makeList.map((res, index) => {
        return (
          <div className="bg-[#aed019] shadow-inner  w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center">
            <h1
              className={`text-[50px] ${show ? "bg-red-500" : "bg-green-700"}`}
            >
              dkfjgldskfg
            </h1>
            <Button
              size="large"
              type="primary"
              className="alter"
              onClick={handleClick}
            >
              gbhfdbk
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
