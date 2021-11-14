import React, { useEffect, useState } from "react";
import CustomHeader from "../../components/customHeader/CustomHeader";
import { fetchApi } from "../../api";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CardImageItem from "../../components/cardImageItem/CardImageItem";
import { googleApiConfig } from "../../api/apiHandler";
import Slider from "react-slick";

export const FoodItem = (props) => {
  const [data, setData] = useState(null);
  const [attraction, setAttraction] = useState(null);

  /** 取得Url上的params */
  const params = useParams();

  /** 取得餐廳詳細資料 */
  useEffect(() => {
    fetchApi("/v2/Tourism/Restaurant", {
      $filter: `ID eq '${params.id}'`,
      $format: "JSON",
    }).then((response) => {
      setData(response.data[0]);
    });
  }, [params.id]);

  const bgImg = {
    backgroundSize: "cover",
    backgroundImage: `url(${data?.Picture.PictureUrl1})`,
  };

  /** 取得鄰近景點的位置 (2km內) */
  useEffect(() => {
    if (data) {
      fetchApi("/v2/Tourism/ScenicSpot", {
        $top: 10,
        $spatialFilter: `nearby(${data.Position.PositionLat},${data.Position.PositionLon},2000)`,
        $format: "JSON",
      }).then((response) => {
        const filteredData = response.data.filter(
          (item) => item.Picture.PictureUrl1
        );
        setAttraction(filteredData);
      });
    }
  }, [data]);

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

  const googlMapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleApiConfig.key}&q=${data?.Name}`;

  const sliderSettings = {
    dots: true,
    infinit: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  return (
    data && (
      <div>
        <CustomHeader title={data && data.Name}></CustomHeader>
        <section className="lg:px-20  sm:px-16 px-8  lg:py-28  py-24 bg-secondary-light">
          <div className="lg:flex block justify-center container max-w-screen-xl mx-auto">
            <div>
              <div
                className="mx-auto lg:w-96 lg:h-96 w-full h-80 rounded"
                style={data && bgImg}
              ></div>
            </div>
            <div className="lg:ml-20 ml-0 lg:mt-0 mt-20 w-full">
              <div
                className="lg:p-16 p-8 lg:min-h-400  h-auto border-8 border-secondary 
                    flex items-center text-primary-dark leading-8  
                    lg:text-xl text-md
                    text-center font-bold"
              >
                <p>
                  {data.Description ? data.Description : data.DescriptionDetail}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 餐廳資訊  */}
        <section className="lg:px-20  sm:px-16 px-8  lg:py-28  py-24">
          <div className="container max-w-screen-xl mx-auto">
            <Title className="col-span-2">餐廳資訊</Title>
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-10">
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

              <div className=" overflow-hidden">
                <iframe
                  className="mx-auto"
                  title="googlemap"
                  width="600"
                  height="450"
                  frameBorder="0"
                  src={googlMapUrl}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* 周邊景點  */}
        <section className="lg:px-20  sm:px-16 px-8  lg:py-28  py-24">
          <div className="container max-w-screen-xl mx-auto">
            <Title>周邊景點</Title>
            <div className="mt-10">
              <Slider {...sliderSettings}>
                {attraction &&
                  attraction.map((item) => {
                    return (
                      <div key={item.ID} className="h-72 px-5">
                        <a href={"/attractionItem/" + item.ID}>
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
            </div>
          </div>
        </section>
      </div>
    )
  );
};
