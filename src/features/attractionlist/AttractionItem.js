import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../api";
import styled from "@emotion/styled";
import Slider from "react-slick";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const sliderSettings = {
  dots: false,
  infinit: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Title = styled.h3`
  color: #246069;
  font-weight: 700;
  padding: 0 10px;
  position: relative;
  font-size: 24px;
  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 65%;
    width: 5px;
    background-color: #246069;
    top: 50%;
    transform: translateY(-50%) translateX(-12px);
  }
`;

const AttractionItem = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchApi("/v2/Tourism/ScenicSpot/Taipei", {
      $filter: `ID eq '${params.id}'`,
      $format: "JSON",
    }).then((response) => {
      setData(response.data[0]);
    });
  }, [params.id]);

  useEffect(() => {
    if (data) {
      fetchApi("/v2/Tourism/Restaurant", {
        $top: 10,
        $spatialFilter: `nearby(${data.Position.PositionLat},${data.Position.PositionLon},2000)`,
        $format: "JSON",
      }).then((response) => {
        setRestaurant(response.data);
      });
    }
  }, [data]);

  // const restaurantCardList = () => {
  //   return restaurant.map((item) => {
  //     return (
  //       <div>
  //         <ImageListItem>
  //           <img
  //             src={item.Picture.PictureUrl1}
  //             alt={item.Picture.PictureDescription1}
  //           />
  //           <ImageListItemBar title={item.Name} />
  //         </ImageListItem>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="container mx-auto">
      {/* 區塊一 */}
      <div className="grid grid-cols-2 gap-10 py-10 ">
        {data && (
          <img
            src={data.Picture.PictureUrl1}
            alt={data.Picture.PictureDescription1}
          />
        )}

        <p className="text-primary-dark flex items-center leading-8  text-center font-bold">
          {data && data.DescriptionDetail}
        </p>
      </div>
      {/* 景點資訊  */}
      <div className="grid grid-cols-2 gap-10 py-10">
        <Title className="col-span-2">景點資訊</Title>
        {data && (
          <div>
            <h4 className="text-primary-dark">地址：{data.Address}</h4>
            <h4 className="text-primary-dark">電話：{data.Phone}</h4>
            <h4 className="text-primary-dark">營業時間：{data.OpenTime}</h4>
            <h4 className="text-primary-dark">分類：{data.Class1}</h4>
            <div className="text-secondary-dark">
              店家資訊僅供參考，詳細資訊請洽業者
            </div>
          </div>
        )}
        <div>
          {data && (
            <img
              src={data.Picture.PictureUrl1}
              alt={data.Picture.PictureDescription1}
            />
          )}
        </div>
      </div>

      {/* 交通資訊 */}
      <Title>交通資訊</Title>
      <div className="grid grid-cols-2 gap-10 py-10"></div>

      {/* 周邊美食  */}
      <Title>周邊美食</Title>
      <Slider {...sliderSettings}>
        {restaurant &&
          restaurant.map((item) => {
            return (
              <div>
                <ImageListItem>
                  <img
                    src={item.Picture.PictureUrl1}
                    alt={item.Picture.PictureDescription1}
                  />
                  <ImageListItemBar title={item.Name} />
                </ImageListItem>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default AttractionItem;
