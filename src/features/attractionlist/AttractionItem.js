import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../api";
import styled from "@emotion/styled";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Slider from "react-slick";
import CustomHeader from "../../components/customHeader/CustomHeader";
import Stack from "@mui/material/Stack";
import CardImageItem from "../../components/cardImageItem/CardImageItem";


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
    fetchApi("/v2/Tourism/ScenicSpot", {
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
        const filteredData = response.data.filter(
          (item) => item.Picture.PictureUrl1
        );
        setRestaurant(filteredData);
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
    data && (
      <>
        <CustomHeader title={data && data.Name}></CustomHeader>

        <div className="container mx-auto">
          {/* 區塊一 */}
          <section className="grid grid-cols-2 gap-10 my-10">
            <img
              src={data.Picture.PictureUrl1}
              alt={data.Picture.PictureDescription1}
            />

            <p className="text-primary-dark flex items-center leading-8  text-center font-bold">
              {data.DescriptionDetail}
            </p>
          </section>
          {/* 景點資訊  */}
          <section className="my-10">
            <Title className="col-span-2">景點資訊</Title>
            <div className="grid grid-cols-2 gap-10">
              <Stack
                className=" text-primary-dark"
                justifyContent="space-evenly"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <RoomIcon />
                  <span> 地址：{data.Address}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalPhoneIcon />
                  <span> 電話：{data.Phone}</span>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <WatchLaterIcon />
                  <span> 營業時間：{data.OpenTime}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WidgetsIcon />
                  <span> 分類：{data.Class1}</span>
                </Stack>
                <div className="text-secondary-dark">
                  店家資訊僅供參考，詳細資訊請洽業者
                </div>
              </Stack>

              <div className=" overflow-hidden h-80">
                <img
                  className="object-cover	"
                  src={data.Picture.PictureUrl1}
                  alt={data.Picture.PictureDescription1}
                />
              </div>
            </div>
          </section>

          {/* 交通資訊 */}
          <section className="my-10">
            <Title>交通資訊</Title>
          </section>

          {/* 周邊美食  */}
          <section className="my-10">
            <Title>周邊美食</Title>
            <Slider {...sliderSettings}>
              {restaurant &&
                restaurant.map((item) => {
                  return (
                    <div key={item.ID} className="h-72 px-5">
                      <CardImageItem
                        url={item.Picture.PictureUrl1}
                        title={item.Name}
                      />
                    </div>
                  );
                })}
            </Slider>
          </section>
        </div>
      </>
    )
  );
};

export default AttractionItem;
