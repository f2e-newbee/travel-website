import React, { useState, useEffect } from "react";

import { PICTURE_PER_PAGE } from "../../features/attractionlist/AttractionList";

export default function CardImageList({ data, page }) {
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
          className="relative h-52 rounded overflow-hidden shadow-sm"
        >
          <img
            src={item.Picture.PictureUrl1}
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
    <div className="absolute text-white bg-black bottom-0 h-20 w-full p-3 opacity-80 font-semibold">
      <span>{title}</span>
    </div>
  );
};
