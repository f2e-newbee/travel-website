import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../api";
import CardImageList from "../../components/cardImageList/CardImageList";
import CardListPagination from "../../components/pagination/CardListPagination";
import CustomHeader from "../../components/customHeader/CustomHeader";
import SearchBar from "../../components/searchBar/SearchBar";

export const AttractionList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [showDataList, setShowDataList] = useState([]);
  const [city, setCity] = useState("All");
  const [keyWord, setKeyWord] = useState("");

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const PICTURE_PER_PAGE = isMobile ? 8 : 12;

  const navigate = useNavigate();
  function getAllData(params = {}) {
    fetchApi(`/v2/Tourism/ScenicSpot`, {
      $format: "JSON",
      ...params,
    }).then((response) => {
      if (response && response.status === 200) {
        setData(response.data.filter((item) => item.Picture.PictureUrl1));
      }
    });
  }

  function getCityData(params = {}) {
    fetchApi(`/v2/Tourism/ScenicSpot/${city}`, {
      $format: "JSON",
      ...params,
    }).then((response) => {
      if (response && response.status === 200) {
        setData(response.data.filter((item) => item.Picture.PictureUrl1));
      }
    });
  }

  // 一進頁面先取得全部
  useEffect(() => {
    getAllData({
      $top: 100,
    });
  }, []);

  useEffect(() => {
    setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
  }, [data, PICTURE_PER_PAGE]);

  useEffect(() => {
    let start = PICTURE_PER_PAGE * (page - 1);
    let end = start + PICTURE_PER_PAGE;
    setShowDataList(data.slice(start, end));
  }, [data, page, PICTURE_PER_PAGE]);

  useEffect(() => {
    if (!keyWord || !keyWord.trim()) {
      if (city === "All") {
        getAllData({ $top: 100 });
      } else {
        getCityData();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);

  function goToDetailPage(item) {
    navigate(`/attractionItem/${item.ID}`);
  }

  function handlePageChange(event, value) {
    setPage(value);
  }

  function handleSearch() {
    if (city === "All") {
      getAllData({
        $top: 100,
        $filter: `contains(Name,'${keyWord}')`,
      });
    } else {
      getCityData({
        $filter: `contains(Name,'${keyWord}')`,
      });
    }
  }

  return (
    <>
      <CustomHeader title="景點列表">
        <SearchBar
          type="primary"
          handleSearch={handleSearch}
          keyWord={keyWord}
          setKeyWord={setKeyWord}
          city={city}
          setCity={setCity}
        />
      </CustomHeader>
      <div className="max-w-screen-lg	 container mx-auto px-4 lg:pd-0">
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
