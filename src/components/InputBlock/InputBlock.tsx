import { ChangeEvent, useState, useEffect } from 'react';
import { translateAction, translateRequest } from '../../redux/slices/translateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import useDebounce from '../../helpers/useDebounceEffect';
import { useTranslation } from 'react-i18next';

const InputBlock = () => {
  const [value, setValue] = useState('');
  const [lang, setLang] = useState<string | null>(localStorage.getItem('i18nextLng'));
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch()
  const to = useAppSelector(state => state.language.lang)
  const from = localStorage.getItem('i18nextLng')
  useEffect(() => {
    try {
      if (value && from !== to) {
        dispatch(translateRequest({value: value, from, to}));
      }
      if (from === to) {
        dispatch(translateAction.changeOutputValue(value))
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
    dispatch(translateAction.changeOutputValue(''))
  };

  return (
    <div className="flex flex-col sm:m-auto">
      <ul className="m-auto flex max-w-[90%] cursor-pointer justify-evenly">
        <li
          className={`${
            lang === 'ru' ? 'border-b-2 border-indigo-500' : ''
          } mb-1 py-5 mx-4 xl:mx-2 sm:text-sm`}
          onClick={() => changeLanguage('ru')}
        >
          {t('Ru')}
        </li>
        <li
          className={`${
            lang === 'en' ? 'border-b-2 border-indigo-500' : undefined
          } mb-1 py-5 mx-4 xl:mx-2 sm:text-sm `}
          onClick={() => changeLanguage('en')}
        >
          {t('En')}
        </li>
        <li
          className={`${
            lang === 'de' ? 'border-b-2 border-indigo-500' : undefined
          } mb-1 py-5 mx-4 xl:mx-2 sm:text-sm`}
          onClick={() => changeLanguage('de')}
        >
          {t('De')}
        </li>
      </ul>
      <textarea
        className="h-[300px] w-[600px] m-auto resize-none rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px]  lg:h-[200px] lg:w-[100%] sm:h-[120px]"
        placeholder={t('Placeholder')}
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default InputBlock;
