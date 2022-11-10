import styled from 'styled-components';

export const NewbieMessageContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewbieMessageTextWrap = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'GowunDodum';
  font-size: 1.5rem;
`;

export const TextEmphasis = styled.em`
  font-family: 'GowunDodum';
  font-size: 2rem;
`;

export const Button = styled.button`
  width: 20rem;
  height: 2.5rem;

  margin-top: 5rem;
  border: 1px solid gray;
  border-radius: 2rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

  color: black;
  background-color: white;

  &:hover {
    color: gray;
  }

  cursor: pointer;
`;
