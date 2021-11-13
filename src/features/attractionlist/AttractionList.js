import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardImageList from "../../components/cardImageList/CardImageList";
import CardListPagination from "../../components/pagination/CardListPagination";
import Filter from "../../components/filter/Filter";
import { fetchApi } from "../../api";
import SearchBar from "../../components/searchBar/SearchBar";
import CustomHeader from "../../components/customHeader/CustomHeader";
export const PICTURE_PER_PAGE = 12;

export const AttractionList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(params = {}) {
    fetchApi("/v2/Tourism/ScenicSpot/Taipei", params).then((response) => {
      const data = response.data.filter((item) => item.Picture.PictureUrl1);
      setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
      setData(data);
    });
  }

  function goToDetailPage(item) {
    // dispatch(setAttractionData(item))
    navigate(`/attractionItem/${item.ID}`);
  }

  return (
    <>
      <CustomHeader title="景點列表">
        <SearchBar type="primary"/>
      </CustomHeader>
      <div className="container mx-auto">
        <Filter />
        <div className="my-10">
          <CardImageList
            data={data}
            page={page}
            goToDetailPage={goToDetailPage}
          />
        </div>
        <div className="flex justify-center mb-20">
          <CardListPagination
            page={page}
            handlePageChange={handlePageChange}
            count={count}
          />
        </div>
      </div>
    </>
  );
};
