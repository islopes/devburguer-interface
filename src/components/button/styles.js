import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: #9758a6;
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #6f357c;
    border: 1px solid #9758a6;
    transition: 0.3s;
  }
`;
