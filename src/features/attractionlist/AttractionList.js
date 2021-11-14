import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../api";
import CardImageList from "../../components/cardImageList/CardImageList";
import CardListPagination from "../../components/pagination/CardListPagination";
import Filter from "../../components/filter/Filter";
import CustomHeader from "../../components/customHeader/CustomHeader";
import SearchBar from "../../components/searchBar/SearchBar";


export const AttractionList = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("NewTaipei");
  const [keyWord, setKeyWord] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [showDataList, setShowDataList] = useState([]);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const PICTURE_PER_PAGE = isMobile ? 8 : 12;
  const navigate = useNavigate();

  const fetchData = useCallback(
    (params) => {
      fetchApi(`/v2/Tourism/ScenicSpot/${city}`, params).then((response) => {
        if (response) {
          const data = response.data.filter((item) => item.Picture.PictureUrl1);
          setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
          setData(data);
          return;
        }
      });
    },
    [city, PICTURE_PER_PAGE]
  );

  useEffect(() => {
    fetchData();
  }, [city, fetchData]);

  useEffect(() => {
    let start = PICTURE_PER_PAGE * (page - 1);
    let end = start + PICTURE_PER_PAGE;
    setShowDataList(data.slice(start, end));
    setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
  }, [data, page, PICTURE_PER_PAGE]);

  useEffect(() => {
    if (keyWord === "") {
      fetchData();
    }
  }, [keyWord, fetchData]);

  function goToDetailPage(item) {
    navigate(`/attractionItem/${item.ID}`);
  }

  function handlePageChange(event, value) {
    setPage(value);
  }

  function handleCityChange(value) {
    setCity(value);
  }

  function handleSearch(keyWord) {
    if (keyWord && keyWord.trim()) {
      fetchData({
        $filter: `contains(Name,'${keyWord}')`,
      });
    }
  }
  return (
    <>
      <CustomHeader title="景點列表" type="attaction">
        <SearchBar
          type="primary"
          handleSearch={handleSearch}
          keyWord={keyWord}
          setKeyWord={setKeyWord}
        />
      </CustomHeader>
      <div className="max-w-screen-lg	 container mx-auto px-4 lg:pd-0">
        <Filter city={city} handleCityChange={handleCityChange} />
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
