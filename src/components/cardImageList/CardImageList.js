import React from "react";
import CardImageItem from "../cardImageItem/CardImageItem";
import SearchOffIcon from "@mui/icons-material/SearchOff";
/**
 * ImageCard列表顯示元件
 * @param {Array} list: 傳入資料列表
 * @param {Function} goToDetailPage: 點擊image後要做的事
 */

const NoData = () => {
  return (
    <div className="text-primary-dark text-3xl flex items-center justify-center font-bold">
      <SearchOffIcon fontSize="large" />
      暫無資料
    </div>
  );
};

export default function CardImageList({ list, goToDetailPage }) {
  return list.length > 0 ? (
    <div className="grid md:grid-cols-4 md:grid-rows-3 gap-6 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1">
      {list.map((item) => {
        return (
          <div className="h-52 shadow-xl" key={item.ID}>
            <CardImageItem
              url={item.Picture.PictureUrl1}
              title={item.Name}
              address={item.Address}
              class1={item.Class1}
              class2={item.Class2}
              class3={item.Class3}
              clickEvent={() => goToDetailPage(item)}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <NoData />
  );
}
