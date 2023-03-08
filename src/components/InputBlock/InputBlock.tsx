import { ChangeEvent, useState, useEffect } from 'react';
import { translateAction, translateRequest } from '../../redux/slices/translateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import useDebounce from '../../helpers/useDebounceEffect';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const InputBlock = () => {
  const [value, setValue] = useState('');
  const [lang, setLang] = useState<string | null>(localStorage.getItem('i18nextLng'));
  const [listItems, setListItems] = useState(['ru', 'en', 'de']);

  const [isAnim, setIsAnim] = useState(true);
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
    setIsAnim((v) => !v);
  };

  return (
    <div className="flex flex-col sm:m-auto sm:w-[100%]">
        <AnimatePresence>
      <ul className="m-auto flex cursor-pointer justify-evenly">
          {listItems.map((item) => (
            <motion.li
              key={item}
              className={`${lang === item ? 'active' : ''} listItem`}
              onClick={() => changeLanguage(item)} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {t(item)}

            </motion.li>
          ))}
      </ul>
        </AnimatePresence>
      <textarea
        className="customBlock outline-none"
        placeholder={t('placeholder')}
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default InputBlock;
