import React from 'react';
import InputBlock from '../components/InputBlock/InputBlock';
import OutputBlock from '../components/OutputBlock/OutputBlock';

const MainPage = () => {
  return (
    <div className="container m-auto flex flex-col items-center ">
      <h1 className="mt-[20%] mb-[50px]">Translater</h1>
      <div className="m-auto flex gap-20 lg:gap-10 md:flex-col">
        <InputBlock />
        <OutputBlock />
      </div>
    </div>
  );
};

export default MainPage;
