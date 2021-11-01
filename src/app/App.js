import React from 'react';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import { Home } from '../features/Home';
import { AttractionList } from '../features/attractionlist/AttractionList';
import { FoodList } from '../features/foodlist/Foods';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from '@emotion/styled'

/** CSS-IN-JS use Emotion */
const Section = styled.section`
  background: #333;
  color: #fff;
`

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App relative">
        <Header />
        <Route exact path="/" component={Home}/> 
        <Route path="/attractionlist" component={AttractionList}/> 
        <Route path="/foodlist" component={FoodList}/> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

