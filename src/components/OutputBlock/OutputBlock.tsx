import React from 'react';

const OutputBlock = () => {
  return (
    <div className="flex flex-col sm:m-auto">
      <span>Language</span>
      <div className="h-[300px] w-[600px] rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px] lg:h-[200px] lg:w-[300px] sm:h-[120px] sm:w-[200px]">
        transtaled text
      </div>
    </div>
  );
};

export default OutputBlock;
