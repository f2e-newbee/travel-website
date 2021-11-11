import React, { useEffect, useState } from "react";
import { fetchApi } from "../../api";
import { FoodCardItem } from "./FoodCardItem";
export const FoodList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      // fetchApi("/v2/Tourism/ScenicSpot/Taichung", {
      //   $top: 12,
      // }).then((data) => {
      //   console.log(data);
      // });
      fetchData();
    }, []);
  
    function fetchData() {
      fetchApi("/v2/Tourism/Restaurant/Taichung", {
        $top: 12,
      }).then((response) => {
        setData(response.data);
        console.log(response)
      });
    }
    
    return (
        <div>
            <div className="bg-food-banner w-full h-screen-md"></div>
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
