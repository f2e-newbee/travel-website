import React, { useEffect } from "react";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Main } from "../layouts/main/Main";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/slice/loading";
import { api } from "../api";
export const App = () => {
  useEffect(() => {
    // TODO: api測試
    api
      .get("/v2/Tourism/ScenicSpot?$top=30&$format=JSON")
      .then((response) => {});
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      {useSelector(selectLoading) && <Loader />}
    </div>
  );
};
