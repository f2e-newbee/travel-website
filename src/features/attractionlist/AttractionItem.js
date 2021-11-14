import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../api";
import styled from "@emotion/styled";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CustomHeader from "../../components/customHeader/CustomHeader";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import CardImageItem from "../../components/cardImageItem/CardImageItem";
import { googleApiConfig } from "../../api/apiHandler";

const Title = styled.h3`
  color: #246069;
  font-weight: 700;
  position: relative;
  font-size: 24px;
  margin-bottom: 20px;
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

const sliderSettings = {
  dots: true,
  infinit: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AttractionItem = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [googleMapUrl, setGoogleMapUrl] = useState("");

  useEffect(() => {
    fetchApi("/v2/Tourism/ScenicSpot", {
      $filter: `ID eq '${params.id}'`,
      $format: "JSON",
    }).then((response) => {
      if (response) {
        setData(response.data[0]);
        setGoogleMapUrl(
          `https://www.google.com/maps/embed/v1/place?key=${googleApiConfig.key}&q=${response.data[0].Name}`
        );
      }
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
        setSlideCount(filteredData.length >= 4 ? 4 : filteredData.length);
      });
    }
  }, [data]);

  const DescriptionField = () => {
    if (data.DescriptionDetail) {
      if (data.DescriptionDetail.length > 100) {
        return (
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <span className="text-3xl">{data.DescriptionDetail[0]}</span>
            <span>{data.DescriptionDetail.slice(1, 100) + "......"}</span>
          </div>
        );
      }
      return (
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <span className="text-3xl">{data.DescriptionDetail[0]}</span>
          <span>{data.DescriptionDetail.slice(1)}</span>
        </div>
      );
    }
    return "暫無資料";
  };

  return (
    data && (
      <>
        <CustomHeader title={data.Name}></CustomHeader>

        <div className="container mx-auto px-8">
          {/* 景點說明  */}
          <section className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <img
                className="max-h-96 w-full"
                src={data.Picture.PictureUrl1}
                alt={data.Picture.PictureDescription1}
              />
              <div className="relative overflow-hidden text-primary-dark leading-8  text-center font-bold">
                <DescriptionField />
              </div>
            </div>
          </section>
          {/* 景點資訊  */}
          <section className="my-10">
            <Title>景點資訊</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <Stack
                className=" text-primary-dark h-56 md:h-auto"
                justifyContent="space-evenly"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <RoomIcon />
                  <span> 地址：{data.Address || data.City}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalPhoneIcon />
                  <span> 電話：{data.Phone}</span>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <WatchLaterIcon />
                  <span> 營業時間：{data.OpenTime || "無"}</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WidgetsIcon />
                  <span> 分類：{data.Class1 || "無"}</span>
                </Stack>
                <div className="text-secondary-dark">
                  店家資訊僅供參考，詳細資訊請洽業者
                </div>
              </Stack>

              <img
                className="max-h-96 w-full"
                src={data.Picture.PictureUrl2 || data.Picture.PictureUrl1}
                alt={data.Picture.PictureDescription1}
              />
            </div>
          </section>

          {/* 交通資訊  */}
          <section className="my-10">
            <Title>交通資訊</Title>
            <div className="relative overflow-hidden h-96">
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                title="googlemap"
                frameBorder="0"
                src={googleMapUrl}
              ></iframe>
            </div>
          </section>

          {/* 周邊美食  */}
          <section className="my-10">
            <Title>周邊美食</Title>
            {restaurant && restaurant.length > 0 ? (
              <Slider {...sliderSettings}>
                {restaurant.map((item) => {
                  return (
                    <div key={item.ID} className="h-72 px-5">
                      <a href={"/foodItem/" + item.ID}>
                        <CardImageItem
                          url={item.Picture.PictureUrl1}
                          title={item.Name}
                          address={item.Address}
                        />
                      </a>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <div className="text-primary-dark">暫無資料</div>
            )}
          </section>
        </div>
      </>
    )
  );
};

export default AttractionItem;
