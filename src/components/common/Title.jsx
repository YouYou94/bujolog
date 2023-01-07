import styled from 'styled-components';

export const CoverTitle = ({ children }) => {
  return <Titleh1Eng>{children}</Titleh1Eng>;
};

export const Titleh1Eng = styled.h1`
  font-family: 'GreatVibes';
  font-size: 5rem;

  text-align: center;
`;
