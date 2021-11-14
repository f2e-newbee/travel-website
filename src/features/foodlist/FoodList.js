import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { FoodCardItem } from "./FoodItem";
import CustomHeader from "../../components/customHeader/CustomHeader";
import SearchBar from "../../components/searchBar/SearchBar";
import CardListPagination from "../../components/pagination/CardListPagination";
import CardImageList from "../../components/cardImageList/CardImageList";
import Filter from "../../components/filter/Filter";

export const FoodList = () => {
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
      fetchApi("/v2/Tourism/Restaurant/NewTaipei", params).then((response) => {
        const data = response.data.filter((item) => item.Picture.PictureUrl1);
        setCount(Math.ceil(data.length / PICTURE_PER_PAGE));
        console.log(data)
        setData(data);
      });
    }

    function goToDetailPage(item) {
      navigate(`/foodItem/${item.ID}`);
    }
    
    function handlePageChange(event, value) {
      setPage(value);
    }

    return (
        <div>
            <CustomHeader title="餐廳列表">
                <SearchBar type="secondary" />
            </CustomHeader>
            <div className="max-w-screen-lg	container mx-auto">
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
        </div>
    )
}
