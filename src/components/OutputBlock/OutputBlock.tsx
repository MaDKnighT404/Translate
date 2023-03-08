import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { translatedAction } from '../../redux/slices/translatedSlice';

const OutputBlock = () => {
  const { outputValue } = useAppSelector((state) => state.translate);

  const state = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const changeLanguage = (language: string) => {
    dispatch(translatedAction.changeLang(language));
  };

  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:m-auto sm:w-[100%]">
      <ul className="m-auto flex  cursor-pointer justify-evenly">
        <li
          className={`${state.lang === 'ru' ? 'active' : ''} listItem`}
          onClick={() => changeLanguage('ru')}
        >
          {t('Ru')}
        </li>
        <li
          className={`${state.lang === 'en' ? 'active' : ''} listItem `}
          onClick={() => changeLanguage('en')}
        >
          {t('En')}
        </li>
        <li
          className={`${state.lang === 'de' ? 'active' : ''} listItem`}
          onClick={() => changeLanguage('de')}
        >
          {t('De')}
        </li>
      </ul>
      <div className="customBlock">{outputValue}</div>
    </div>
  );
};

export default OutputBlock;
