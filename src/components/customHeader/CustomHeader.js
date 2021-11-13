import React from "react";

/**
 * 景點、美食、住宿 自定義Header元件
 * @param title 標題文字
 * @param children 內容
 */
const CustomHeader = ({ title, children }) => {
  return (
    <div className="bg-food-banner w-full h-screen-md">
      <div className=" h-full  flex flex-col items-center justify-center relative">
        <h1 className="text-white text-4xl text-center font-bold">{title}</h1>
        <div className="absolute transform translate-y-16 w-full"> {children}</div>
      </div>
    </div>
  );
};

export default CustomHeader;
