import React, { useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import HeaderMobile from "./HeaderMobile";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

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
  const headerClass = `top-0 fixed  w-full  z-50	${
    header ? "bg-primary" : "bg-transparent"
  }`;
  window.addEventListener("scroll", changeHeaderBg);

  return (
    <header className={headerClass}>
      <StyledEngineProvider injectFirst>
        <HeaderMobile />
      </StyledEngineProvider>
      <div className="navbar-desktop h-16 flex items-center p-5">
        <div className="w-4/12">
          <a className="w-full h-auto" href="/">
            <Logo />
          </a>
        </div>
        <ul className="navbar-list w-4/12	 text-gray-100 flex items-center justify-center">
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/attractionlist">景點</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/foodlist">餐廳</a>
          </li>
          <li className="mr-2 px-10 hover:text-white font-bold">
            <a href="/#">住宿</a>
          </li>
          {/* <li className="mr-2 px-10 hover:text-white font-bold">
                        <a href="#">主題之旅</a>
                    </li> */}
          {/* <li className="mr-2 px-10 hover:text-white font-bold">
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="輸入關鍵字.."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>                     
                    </li> */}
        </ul>
      </div>
    </header>
  );
};
