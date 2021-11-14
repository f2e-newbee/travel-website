import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const cityList = [
  {
    text: "全選",
    value: "All",
  },
  {
    text: "臺北市",
    value: "Taipei",
  },
  {
    text: "新北市",
    value: "NewTaipei",
  },
  {
    text: "桃園市",
    value: "Taoyuan",
  },
  {
    text: "臺中市",
    value: "Taichung",
  },
  {
    text: "臺南市",
    value: "Tainan",
  },
  {
    text: "高雄市",
    value: "Kaohsiung",
  },
  {
    text: "基隆市",
    value: "Keelung",
  },
  {
    text: "新竹市",
    value: "Hsinchu",
  },
  {
    text: "新竹縣",
    value: "HsinchuCounty",
  },
  {
    text: "苗栗縣",
    value: "MiaoliCounty",
  },
  {
    text: "彰化縣",
    value: "ChanghuaCounty",
  },
  {
    text: "南投縣",
    value: "NantouCounty",
  },
  {
    text: "雲林縣",
    value: "YunlinCounty",
  },
  {
    text: "嘉義縣",
    value: "ChiayiCounty",
  },
  {
    text: "嘉義市",
    value: "Chiayi",
  },
  {
    text: "屏東縣",
    value: "PingtungCounty",
  },
  {
    text: "宜蘭縣",
    value: "YilanCounty",
  },
  {
    text: "花蓮縣",
    value: "HualienCounty",
  },
  {
    text: "臺東縣",
    value: "TaitungCounty",
  },
  {
    text: "金門縣",
    value: "KinmenCounty",
  },
  {
    text: "澎湖縣",
    value: "PenghuCounty",
  },
  {
    text: "連江縣",
    value: "LienchiangCounty",
  },
];

const Filter = ({ city, setCity }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>縣市</InputLabel>
      <Select
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cityList.map((city) => {
          return (
            <MenuItem key={city.value} value={city.value}>
              {city.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
