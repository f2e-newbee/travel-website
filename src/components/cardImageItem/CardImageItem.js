import React from "react";

const CardImageItem = ({ url, title, subTitle, clickEvent , address, class1 ,class2,class3}) => {
  const ImageBar = () => {
    return (
      <>
        <div className="absolute bg-black bottom-0 h-20 w-full opacity-60 font-semibold"></div>
        <div className="absolute h-20 w-full p-3 bottom-0">
          <h3 className="text-white font-semibold  text-sm">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">{address}</p>
          <p className="text-gray-300 text-sm">
            <span className="mr-1">{class1? class1 + ' /' : class1}</span>
            <span className="mr-1">{class2 && class3 ? class2 + ' /' : class2}</span>
            <span className="mr-1">{class3}</span>
          </p>
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
