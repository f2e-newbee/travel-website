import React from 'react';
import { Footer } from '../layouts/Footer';
import { Navigation } from '../layouts/Navigation';
import { Header } from '../layouts/Header';
import styled from '@emotion/styled'

/** CSS-IN-JS use Emotion */
const Section = styled.section`
  background: #333;
  color: #fff;
`

export const App = () => {
  return (
      <div className="App">
        <Navigation />
        <Header />
        <div className="text-yellow-700">Use Tailwind Style</div>
        <Section>Use CSS-IN-JS style.</Section>
        <Footer />
      </div>
  );
}

