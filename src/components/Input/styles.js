import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #999999;
  border-radius: 22px;
  min-width: 25px;
  width: 85%;
  margin-right: 12px;
  background-color: transparent;
  font-size: 18px;
  padding: 10px;
  color: #FFFFFF;

  &:focus {
    outline: none;
    border-color: #58a6ff;
  }

  &::placeholder {
    color: #999999;
  }
`; 