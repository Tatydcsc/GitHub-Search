import React from 'react';
import { StyledInput } from './styles';

const Input = ({ value, onChange, placeholder, ...props }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input; 