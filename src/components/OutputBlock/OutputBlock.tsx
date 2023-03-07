import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { translatedAction } from '../../redux/slices/translatedSlice';

const OutputBlock = () => {
  const { outputValue } = useAppSelector(state => state.translate)
  const [lang, setLang] = useState<string | null>(localStorage.getItem('i18nextLng'));

  const { t, i18n } = useTranslation();

  const state = useAppSelector(state => state.language)
  const dispatch = useAppDispatch()


  
  const changeLanguage = (language: string) => {
    dispatch(translatedAction.changeLang(language))
  };


  return (
    <div className="flex flex-col sm:m-auto">
            <ul className="m-auto flex max-w-[90%] cursor-pointer justify-evenly">
        <li
          className={`${
            state.lang === 'ru' ? 'border-b-2 border-indigo-500' : ''
          } mb-1 py-5 px-4 xl:px-2 sm:text-sm`}
          onClick={() => changeLanguage('ru')}
        >
          {t('Ru')}
        </li>
        <li
          className={`${
            state.lang === 'en' ? 'border-b-2 border-indigo-500' : undefined
          } mb-1 py-5 px-4 xl:px-2 sm:text-sm `}
          onClick={() => changeLanguage('en')}
        >
          {t('En')}
        </li>
        <li
          className={`${
            state.lang === 'de' ? 'border-b-2 border-indigo-500' : undefined
          } mb-1 py-5 px-4 xl:px-2 sm:text-sm`}
          onClick={() => changeLanguage('de')}
        >
          {t('De')}
        </li>
      </ul>
      <div className="h-[300px] w-[600px] rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px] lg:h-[200px] lg:w-[300px] sm:h-[120px] sm:w-[200px]">
        {outputValue}
      </div>
    </div>
  );
};

export default OutputBlock;
