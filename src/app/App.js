import React from "react";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Home } from "../features/home/Home";
import { AttractionList } from "../features/attractionlist/AttractionList";
import { FoodList } from "../features/foodlist/FoodList";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectFetch } from "../store/slice";
import { ErrorModal } from "../components/modal/ErrorModal";

/** CSS-IN-JS use Emotion */
const Section = styled.section`
  background: #333;
  color: #fff;
`;

export const App = () => {
  const { loading, hasError, errorMsg } = useSelector(selectFetch);

  return (
    <BrowserRouter>
      <div className="App relative">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/attractionlist" component={AttractionList} />
        <Route path="/foodlist" component={FoodList} />
        <Footer />
        {loading && <Loader />}
        {hasError && <ErrorModal errorMsg={errorMsg} />}
      </div>
    </BrowserRouter>
  );
};
