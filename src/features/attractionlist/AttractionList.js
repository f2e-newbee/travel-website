import React, { useEffect, useState } from "react";
import CardImageList from "../../components/cardImageList/CardImageList";
import CardListPagination from "../../components/pagination/CardListPagination";
import { fetchApi } from "../../api";

export const PICTURE_PER_PAGE = 12;

export const AttractionList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // const [count, setCount] = useState(0);
  useEffect(() => {
    // fetchApi("/v2/Tourism/ScenicSpot/Taichung", {
    //   $top: 12,
    // }).then((data) => {
    //   console.log(data);
    // });
    fetchData();
  }, []);

  function fetchData(params = {}) {
    fetchApi("/v2/Tourism/ScenicSpot/Taipei", params).then((response) => {
      const data = response.data.filter((item) => item.Picture.PictureUrl1);
      setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
      setData(data);
    });
  }

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-10">
          <CardImageList data={data} page={page} />
        </div>
        <div className="flex justify-center mb-20">
          <CardListPagination
            page={page}
            handlePageChange={handlePageChange}
            count={count}
          />
        </div>
      </div>
    </div>
  );
};
