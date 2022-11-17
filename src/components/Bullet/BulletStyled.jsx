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

/* Bullet Contents */
export const ContentsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const BulletContainer = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  border-bottom: 2px solid rgb(220, 220, 220);
`;

export const ButtonContainer = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
