import React from 'react';
import { useTranslation } from 'react-i18next';
import InputBlock from '../components/InputBlock/InputBlock';
import OutputBlock from '../components/OutputBlock/OutputBlock';

const MainPage = () => {
  const { t } = useTranslation();
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
