import React, { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...otherProps } = props;
  return (
    <button
      className={`bg-emerald-500 py-2 px-4 text-black font-semibold rounded ${
        className || ''
      }`}
      {...otherProps}
    />
  );
};

export default Button;
