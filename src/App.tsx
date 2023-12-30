import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const ExampleComponent: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default ExampleComponent;
