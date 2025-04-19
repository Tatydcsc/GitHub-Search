import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid #444c56;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #58a6ff;
  }
`;

const SearchButton = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  background: #238636;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #2ea043;
    transform: translateY(-2px);
  }
`; 