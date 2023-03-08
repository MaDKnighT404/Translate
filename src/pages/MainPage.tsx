import React from 'react';
import InputBlock from '../components/InputBlock/InputBlock';
import OutputBlock from '../components/OutputBlock/OutputBlock';

const MainPage = () => {
  return (
    <div className="container m-auto flex flex-col items-center text-indigo-100">
      <div className="customBlockWrapper">
        <InputBlock />
        <OutputBlock />
      </div>
    </div>
  );
};

export default MainPage;
