import React from 'react';
import { StyledButton } from './styles';

const Button = ({ onClick, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button; 