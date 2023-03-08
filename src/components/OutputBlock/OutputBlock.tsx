import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { translatedAction } from '../../redux/slices/translatedSlice';
import { useState } from 'react';

const OutputBlock = () => {
  const { outputValue } = useAppSelector((state) => state.translate);
  const { t } = useTranslation();
  const [listItems, setListItems] = useState(['ru', 'en', 'de']);
  const state = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const changeLanguage = (language: string) => {
    dispatch(translatedAction.changeLang(language));
  };

  return (
    <div className="flex flex-col sm:m-auto sm:w-[100%]">
      <ul className="m-auto flex  cursor-pointer justify-evenly">
        {listItems.map((item: string) => (
          <li
            key={item}
            className={`${state.lang === item ? 'active' : ''} listItem`}
            onClick={() => changeLanguage(item)}
          >
            {t(item)}
          </li>
        ))}
      </ul>
      <div className="customBlock">{outputValue}</div>
    </div>
  );
};

export default OutputBlock;
