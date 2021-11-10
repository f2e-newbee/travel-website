import React, { useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMobile from "./HeaderMobile";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

/**  SearchBar Style */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Header = () => {
  /** 設定header背景顏色 */
  const [header, setHeader] = useState(false);
  const changeHeaderBg = () => {
    if (window.scrollY >= 60) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  const headerClass = `top-0 fixed  w-full  ${
    header ? "bg-primary" : "bg-transparent"
  }`;
  window.addEventListener("scroll", changeHeaderBg);

  return (
    <header className={headerClass}>
      <StyledEngineProvider injectFirst>
        <HeaderMobile />
      </StyledEngineProvider>
      <div className="navbar-desktop h-16 flex items-center justify-between p-5">
        <div className="text-gray-50">
          <a href="/">Logo Here </a>
        </div>
        <ul className="w-100  text-gray-100 pr-20 flex items-center">
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/attractionlist">景點</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/foodlist">美食</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/#">住宿</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/#">主題之旅</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="輸入關鍵字.."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </li>
        </ul>
      </div>
    </header>
  );
};
