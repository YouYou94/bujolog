import styled from 'styled-components';

/* Caption */
export const Caption = styled.h1`
  font-family: 'GreatVibes';

  @media screen and (min-width: 1024px) {
    font-size: 5rem;

    margin: 0.5rem 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;

    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

export const SubCaption = styled.h1`
  font-family: 'GowunDodum';
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

/* Monthly Contents */
export const ContentsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const MonthlyContainer = styled.div`
  width: 1200%;

  flex: 1;

  display: flex;
`;

export const MonthlyCarousel = styled.div`
  width: 1200%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgb(220, 220, 220);

  background-color: white;
`;
