import React from 'react';


const Button = ({ text, onClick }: Button) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
