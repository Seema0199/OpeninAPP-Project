import React from "react";

function Box2({ color, heading, time, lend }) {
  return (
    <div className="flex gap-5 ">
      <div className={`${color} w-1 h-full`}></div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">{heading}</div>
        <div className="font-[300]">{time}</div>
        <div className="font-[300]">{lend}</div>
      </div>
    </div>
  );
}

export default Box2;
