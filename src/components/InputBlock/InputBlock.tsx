import { ChangeEvent, useState, useEffect } from 'react';
import { translateAction, translateRequest } from '../../redux/slices/translateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import useDebounce from '../../helpers/useDebounceEffect';
import { useTranslation } from 'react-i18next';

const InputBlock = () => {
  const [value, setValue] = useState('');
  const [lang, setLang] = useState<string | null>(localStorage.getItem('i18nextLng'));
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();
  const to = useAppSelector((state) => state.language.lang);
  const from = localStorage.getItem('i18nextLng');
  useEffect(() => {
    try {
      if (value && from !== to) {
        dispatch(translateRequest({ value: value, from, to }));
      }
      if (from === to) {
        dispatch(translateAction.changeOutputValue(value));
      }
    } catch (e) {
      console.log(e);
    }
  }, [debouncedValue, from, to]);

  const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLang(localStorage.getItem('i18nextLng'));
    setValue('');
    dispatch(translateAction.changeOutputValue(''));
  };

  return (
    <div className="flex flex-col sm:m-auto sm:w-[100%]">
      <ul className="m-auto flex cursor-pointer justify-evenly">
        <li
          className={`${lang === 'ru' ? 'active' : ''} listItem`}
          onClick={() => changeLanguage('ru')}
        >
          {t('Ru')}
        </li>
        <li
          className={`${lang === 'en' ? 'active' : ''} listItem`}
          onClick={() => changeLanguage('en')}
        >
          {t('En')}
        </li>
        <li
          className={`${lang === 'de' ? 'active' : ''} listItem`}
          onClick={() => changeLanguage('de')}
        >
          {t('De')}
        </li>
      </ul>
      <textarea
        className="customBlock outline-none"
        placeholder={t('Placeholder')}
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default InputBlock;
