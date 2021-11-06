import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import Card from "@mui/material/Card";
import { fetchApi } from "../../api";
export const AttractionList = () => {
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
    fetchApi("/v2/Tourism/ScenicSpot/Taichung", {
      $top: 12,
    }).then((response) => {
      setData(response.data);
    });
  }

  function CardList() {
    return data.map((item) => {
      return (
        <Card key={item.ID}>
          <img
            className="object-fill h-48 w-full"
            src={item.Picture.PictureUrl1}
            alt={item.Picture.PictureDescription1}
          />
        </Card>
      );
    });
  }
  return (
    <div>
      <div className="container mx-auto">
        <Filter />
       

        <div className="grid grid-cols-4 grid-rows-3 gap-10">
          <CardList />
        </div>
      </div>
    </div>
  );
};
