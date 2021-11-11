import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../api";
import styled from "@emotion/styled";

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

  useEffect(() => {
    fetchApi("/v2/Tourism/ScenicSpot/Taipei", {
      $filter: `ID eq '${params.id}'`,
      $format: "JSON",
    }).then((response) => {
      setData(response.data[0]);
      // console.log("data", data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      {/* 區塊一 */}
      <div className="grid grid-cols-2 gap-10 py-10 ">
        <div>
          <img
            src={data.Picture.PictureUrl1}
            alt={data.Picture.PictureDescription1}
          />
        </div>
        <p className="text-primary-dark flex items-center leading-8  text-center font-bold">
          {data.DescriptionDetail}
        </p>
      </div>
      {/* 景點資訊  */}
      <div className="grid grid-cols-2 gap-10 py-10">
        <Title className="col-span-2">景點資訊</Title>
        <div>
          <h4 className="text-primary-dark">地址：{data.Address}</h4>
        </div>
        <div>
          <img
            src={data.Picture.PictureUrl1}
            alt={data.Picture.PictureDescription1}
          />
        </div>
      </div>
    </div>
  );
};

export default AttractionItem;
