import styled from 'styled-components';

export const CoverLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const LetterBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled.div`
  height: 4rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 2rem;
`;

export const Letter = styled.p`
  font-family: 'GowunDodum';
  font-size: 1.2rem;
`;

export const Emphasis = styled.span`
  font-family: 'CormorantGaramond';
  font-size: 2rem;
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const Button = styled.button`
  border: none;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  transition: all 0.35s;

  &:hover {
    color: gray;
    font-size: 1.4rem;
  }
`;
