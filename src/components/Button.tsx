import React from 'react';

const Button: React.FC<Button> = ({ text, onClick }: Button) => {
  return (
    <div className="bg-[rgb(36,36,36)] rounded p-2 mx-2 mb-2 ">
      <button className="text-sm text-center w-full" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
