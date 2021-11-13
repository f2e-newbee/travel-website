import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api";
import { FoodCardItem } from "./FoodCardItem";
import CustomHeader from "../../components/customHeader/CustomHeader";
import SearchBar from "../../components/searchBar/SearchBar";

export const FoodList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      fetchApi("/v2/Tourism/Restaurant/Taichung", {
        $top: 12,
      }).then((response) => {
        setData(response.data);
      });
    }
    
    return (
        <div>
             <CustomHeader title="餐廳列表">
                <SearchBar type="secondary" />
           </CustomHeader>
            <div className="mt-10 grid grid-cols-4 grid-rows-3 gap-10 px-36">
                {
                    data.map((item) =>{
                        if(item.Picture.PictureUrl1){
                            return(
                                <FoodCardItem 
                                    key={item.ID}
                                    url={item.Picture.PictureUrl1}
                                    name={item.Name}
                                />
                            )
                        }   
                        return null
                })}
            </div>
        </div>
    )
}
