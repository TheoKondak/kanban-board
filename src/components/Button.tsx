import React from 'react';

const Button: React.FC<Button> = ({ text, onClick }: Button) => {
  return (
    <div className="bg-[rgb(36,36,36)] rounded mx-2 mb-2 flex flex-col items-center justify-center">
      <button className="text-center w-full p-2 ml-0.5 text-[10px] leading-5 rounded-none block hover:border-transparent hover:shadow-lg hover:bg-[rgb(28,28,28)]" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
