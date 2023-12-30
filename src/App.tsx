import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { OurActivities } from './components/OurActivities';

const ExampleComponent: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <OurActivities />
    </>
  );
};

export default ExampleComponent;
