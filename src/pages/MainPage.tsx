import React from 'react';
import { useTranslation } from 'react-i18next';
import InputBlock from '../components/InputBlock/InputBlock';
import OutputBlock from '../components/OutputBlock/OutputBlock';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container m-auto flex flex-col items-center text-indigo-100">
      <h1 className="mt-[20%] mb-[50px]  text-center text-5xl">{t('Title')}</h1>
      <div className="m-auto flex gap-20 lg:gap-10  md:flex-col md:w-[100%] md:px-6">
        <InputBlock />
        <OutputBlock />
      </div>
    </div>
  );
};

export default MainPage;
