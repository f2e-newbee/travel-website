import React from "react";


/**
 * ImageCard列表顯示元件
 * @param {Array} list: 傳入資料列表
 * @param {Function} goToDetailPage: 點擊image後要做的事
 */
export default function CardImageList({ list, goToDetailPage }) {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-6">
      {list.map((item) => (
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
