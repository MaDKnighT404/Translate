import React from 'react';

const InputBlock = () => {
  return (
    <div className="flex flex-col sm:m-auto">
      <span>Language</span>
      <textarea
        className="h-[300px] w-[600px] resize-none rounded-lg border-[2px] border-gray-600 p-4 xl:w-[450px]  lg:h-[200px] lg:w-[300px] sm:h-[120px] sm:w-[200px]"
        placeholder="type text here"
      />
    </div>
  );
};

export default InputBlock;
