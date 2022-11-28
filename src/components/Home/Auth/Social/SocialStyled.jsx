import styled from 'styled-components';

export const LoginButton = styled.button`
  width: 10rem;
  height: 2rem;

  margin: 0 0.5rem;
  border-radius: 0.5rem;
  border: none;

  color: black;
  background-color: transparent;

  &:hover {
    background-color: ${prop => prop.color};
    color: white;
  }
`;
