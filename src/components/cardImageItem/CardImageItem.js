import React from "react";
import Card from "@mui/material/Card";

const CardImageItem = ({ url, title, subTitle, clickEvent }) => {
  const bgImgStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${url})`,
  };
  const ImageBar = () => {
    return (
      <>
        <div className="absolute bg-black bottom-0 h-20 w-full opacity-40 font-semibold"></div>
        <div className="absolute h-20 w-full p-3 bottom-0">
          <h3 className="text-white font-bold text-lg whitespace-nowrap">
            {title}
          </h3>
        </div>
      </>
    );
  };

  return (
    <Card className="" onClick={clickEvent}>
      <div className="relative h-52 rounded overflow-hidden shadow-sm cursor-pointer">
        <div className="h-full w-auto" style={bgImgStyle}></div>
        <ImageBar />
      </div>
    </Card>
  );
};

export default CardImageItem;
