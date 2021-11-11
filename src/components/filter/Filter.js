import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Filter = () => {
  const [district, setDistrict] = useState('');

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <span className="text-primary-dark font-bold">排序</span>
          <Chip label="評分" variant="outlined" />
          <Chip label="評論數" variant="outlined" />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth variant="standard">
          <InputLabel>行政區</InputLabel>
          <Select value={district} onChange={handleDistrictChange}>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item xs={2}>
        <FormControl fullWidth variant="standard">
          <InputLabel>營業時間</InputLabel>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
    </Grid>
  );
};

export default Filter;
