import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
      <Button>See More</Button>
    </>
  );
};

export default App;