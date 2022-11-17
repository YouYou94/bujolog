import styled from 'styled-components';

/* Caption */
export const Caption = styled.h1`
  font-family: 'GreatVibes';

  @media screen and (min-width: 1024px) {
    font-size: 5rem;

    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;

    margin: 0 1rem;
  }
`;

/* Contents */
export const ContentsWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Letter = styled.p`
  font-family: 'GowunDodum';
  font-size: 1.3rem;
`;

export const Emphasis = styled.span`
  font-family: 'CormorantGaramond';
  font-size: 3rem;
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const Button = styled.button`
  width: 20rem;
  height: 2.5rem;
`;
