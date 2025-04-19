import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #999999;
  border-radius: 22px;
  margin-right: 12px;
  background: #2D333B;
  color: #FFFFFF;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #444c56;
    border-color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`; 