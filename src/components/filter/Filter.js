import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Filter = () => {
  const [district, setDistrict] = useState("");

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <div>
        <SortIcon />
        <span>排序</span>
      </div>
      <Chip label="評分" variant="outlined" />
      <Chip label="評論數" variant="outlined" />
      <FormControl variant="standard">
        <Select value={district} onChange={handleDistrictChange}>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Filter;
