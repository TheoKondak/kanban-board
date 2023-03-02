import React from 'react';

const Button: React.FC<Button> = ({ text, onClick }: Button) => {
  return (
    <div className="bg-[rgb(36,36,36)] rounded mx-2 mb-2 flex flex-col items-center justify-center">
      <button className="text-center w-full p-0 text-[10px] rounded-none block p-1 hover:border-[rgb(255,255,255)]" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
