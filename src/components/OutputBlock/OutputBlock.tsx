import React from 'react';
import { useAppSelector } from '../../redux/store';

const OutputBlock = () => {
  const { outputValue } = useAppSelector(state => state.translate)
  return (
    <div className="flex flex-col sm:m-auto">
      <span>English</span>
      <div className="h-[300px] w-[600px] rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px] lg:h-[200px] lg:w-[300px] sm:h-[120px] sm:w-[200px]">
        {outputValue}
      </div>
    </div>
  );
};

export default OutputBlock;
