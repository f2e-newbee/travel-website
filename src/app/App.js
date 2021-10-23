import React from 'react';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import { Main } from '../layouts/main/Main';
import styled from '@emotion/styled'

/** CSS-IN-JS use Emotion */
const Section = styled.section`
  background: #333;
  color: #fff;
`

export const App = () => {
  return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

