import styled from 'styled-components';

/* Bullet Title */
export const BulletTitleWrap = styled.div`
  height: 5rem;

  text-align: center;
`;

export const BulletTitle = styled.p`
  margin: 0.5rem 0;

  font-family: 'CormorantGaramond';
  font-size: 3rem;
`;

/* Bullet Key */
export const BulletKeyWrap = styled.div`
  flex: 1;

  border: 1px solid rgb(220, 220, 220);
  box-shadow: 7px 7px rgb(0, 0, 0, 0.1);
`;

/* Bullet Progress Button */
export const BulletProgressWrap = styled.div`
  height: 5rem;

  text-align: center;
`;

export const BulletProgressButton = styled.button`
  width: 8rem;
  height: 2rem;

  margin: 1rem 0.5rem 0 0.5rem;
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
