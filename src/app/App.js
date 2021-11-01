import React, { useEffect } from "react";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Home } from "../features/Home";
import { AttractionList } from "../features/attractionlist/AttractionList";
import { FoodList } from "../features/foodlist/Foods";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/slice/loading";
import { api } from "../api";

/** CSS-IN-JS use Emotion */
const Section = styled.section`
  background: #333;
  color: #fff;
`;

export const App = () => {
  useEffect(() => {
    // TODO: api測試
    api
      .get("/v2/Tourism/ScenicSpot?$top=30&$format=JSON")
      .then((response) => {});
  }, []);

  return (
    <BrowserRouter>
      <div className="App relative">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/attractionlist" component={AttractionList} />
        <Route path="/foodlist" component={FoodList} />
        <Footer />
        {useSelector(selectLoading) && <Loader />}
      </div>
    </BrowserRouter>
  );
};
