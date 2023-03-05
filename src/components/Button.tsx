import React from 'react';

const Button: React.FC<Button> = ({ text, onClick }: Button) => (
  <button className="button text-center w-full p-2 ml-0.5 text-xxs leading-5 rounded-none block hover:border-transparent hover:shadow-lg " type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
