import React from "react";

const CardImageItem = ({ url, title, subTitle, clickEvent }) => {
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
    <div
      className="relative rounded shadow-sm cursor-pointer overflow-hidden h-full"
      onClick={clickEvent}
    >
      <img src={url} alt={title} className="h-full w-full" />
      <ImageBar />
    </div>
  );
};

export default CardImageItem;
