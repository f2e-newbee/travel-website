import React, { useState, useEffect } from "react";

const PICTURE_PER_PAGE = 12;

export default function CardImageList({ data, page, goToDetailPage }) {
  const [itemData, setItemData] = useState(data.slice(0, PICTURE_PER_PAGE));

  useEffect(() => {
    let start = PICTURE_PER_PAGE * (page - 1);
    let end = start + PICTURE_PER_PAGE;
    setItemData(data.slice(start, end));
  }, [data, page]);

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-6">
      {itemData.map((item) => (
        <div
          key={item.ID}
          className="relative h-52 rounded overflow-hidden shadow-sm cursor-pointer"
          onClick={() => goToDetailPage(item)}
        >
          <img
            src={item.Picture.PictureUrl2 || item.Picture.PictureUrl1}
            alt={item.Name}
            className="w-full h-full"
          />
          <ImageBar title={item.Name} />
        </div>
      ))}
    </div>
  );
}

const ImageBar = ({ title }) => {
  return (
    <div className="absolute text-white bg-black bottom-0 h-20 w-full p-3 opacity-70 font-semibold">
      <span>{title}</span>
    </div>
  );
};
