import { ChangeEvent, useState, useEffect } from 'react';
import { translateRequest } from '../../redux/slices/translateSlice';
import { useAppDispatch } from '../../redux/store';
import useDebounce from '../../helpers/useDebounceEffect';

const InputBlock = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      if (value) {
        dispatch(translateRequest(value));
      }
    } catch (e) {
      console.log(e);
    }
  }, [debouncedValue]);

  const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col sm:m-auto">
      <span>Russian</span>
      <textarea
        className="h-[300px] w-[600px] resize-none rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px]  lg:h-[200px] lg:w-[300px] sm:h-[120px] sm:w-[200px]"
        placeholder="type text here"
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default InputBlock;
