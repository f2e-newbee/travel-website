import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../api";
import CardImageList from "../../components/cardImageList/CardImageList";
import CardListPagination from "../../components/pagination/CardListPagination";
import Filter from "../../components/filter/Filter";
<<<<<<< HEAD
import CustomHeader from "../../components/customHeader/CustomHeader";
import SearchBar from "../../components/searchBar/SearchBar";
=======
import { fetchApi } from "../../api";
import SearchBar from "../../components/searchBar/SearchBar";
import CustomHeader from "../../components/customHeader/CustomHeader";
export const PICTURE_PER_PAGE = 12;
>>>>>>> feature/homepage

export const AttractionList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [showDataList, setShowDataList] = useState([]);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const PICTURE_PER_PAGE = isMobile ? 8 : 12;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let start = PICTURE_PER_PAGE * (page - 1);
    let end = start + PICTURE_PER_PAGE;
    setShowDataList(data.slice(start, end));
    setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
  }, [data, page, PICTURE_PER_PAGE]);

  function fetchData(params = {}) {
    fetchApi("/v2/Tourism/ScenicSpot/Taipei", params).then((response) => {
      const data = response.data.filter((item) => item.Picture.PictureUrl1);
      setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
      setData(data);
    });
  }

  function goToDetailPage(item) {
    navigate(`/attractionItem/${item.ID}`);
  }

  function handlePageChange(event, value) {
    setPage(value);
  }

  return (
    <>
      <CustomHeader title="景點列表">
<<<<<<< HEAD
        <SearchBar />
=======
        <SearchBar type="primary"/>
>>>>>>> feature/homepage
      </CustomHeader>
      <div className="container mx-auto">
        <Filter />
        <div className="my-10">
          <CardImageList list={showDataList} goToDetailPage={goToDetailPage} />
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
