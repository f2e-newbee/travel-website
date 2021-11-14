import React from "react";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Home } from "../features/home/Home";
import { AttractionList } from "../features/attractionlist/AttractionList";
import { FoodList } from "../features/foodlist/FoodList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectFetch } from "../store/slice";
import { ErrorModal } from "../components/modal/ErrorModal";
import AttractionItem from "../features/attractionlist/AttractionItem";
import { FoodItem }  from "../features/foodlist/FoodItem";
import { ErrorPage } from "../features/errorpage/ErrorPage";

export const App = () => {
  const { loading, hasError, errorMsg } = useSelector(selectFetch);

  return (
    <BrowserRouter basename="travel-website">
      <div className="App relative">
        <Header />
        <Routes>
            <Route exact path="/">
              <Route path="/" element={<Home />} />
              <Route path="attractionlist" element={<AttractionList />} />
              <Route path="foodlist" element={<FoodList />} />
              <Route path="attractionItem" element={<AttractionItem />}>
                <Route path=":id" element={<AttractionItem />} />
              </Route>
              <Route path="foodItem" element={<FoodItem />}>
                <Route path=":id" element={<FoodItem />} />
              </Route>
              <Route path="*" element={<ErrorPage />}/>
            </Route>
        </Routes>
        <Footer />
        {loading && <Loader />}
        {hasError && <ErrorModal errorMsg={errorMsg} />}
      </div>
    </BrowserRouter>
  );
};
