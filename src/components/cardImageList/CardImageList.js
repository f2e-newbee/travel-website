import React from "react";
import CardImageItem from "../cardImageItem/CardImageItem";

/**
 * ImageCard列表顯示元件
 * @param {Array} list: 傳入資料列表
 * @param {Function} goToDetailPage: 點擊image後要做的事
 */
export default function CardImageList({ list, goToDetailPage }) {
  return (
    <div className="grid md:grid-cols-4 md:grid-rows-3 gap-6 grid-cols-2 grid-rows-4">
      {list.map((item) => {
        return (
          <div className="h-52" key={item.ID}>
            <CardImageItem
              url={item.Picture.PictureUrl1}
              title={item.Name}
              clickEvent={() => goToDetailPage(item)}
            />
          </div>
        );
      })}
    </div>
  );
}
