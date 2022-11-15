import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'CormorantGaramond';
  font-size: 4rem;

  cursor: pointer;
`;

export const Input = styled.input`
  width: 25rem;
  height: 3rem;

  margin: 0.3rem 0;
  padding: 1rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 25rem;
  height: 2rem;

  margin-top: 1rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;
`;

export const Social = styled.div`
  font-size: 1rem;

  margin: 0 0.6rem;

  color: black;

  cursor: pointer;

  &:hover {
    color: ${prop => prop.color};
  }
`;
