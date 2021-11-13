import React from "react";

/**
 * 景點、美食、住宿 自定義Header元件
 * @param title 標題文字
 */
const CustomHeader = ({ title, children }) => {
  return (
    <div className="bg-food-banner w-full h-screen-md">
      <div className=" h-full  flex flex-col items-center justify-center relative">
        <h1 className="text-white text-4xl text-center">{title}</h1>
        <div className="absolute transform translate-y-16"> {children}</div>
      </div>
    </div>
  );
};

export default CustomHeader;
