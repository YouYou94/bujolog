import styled from 'styled-components';

/* Bullet Title */
export const BulletTitleWrap = styled.div`
  text-align: center;
`;

export const BulletTitle = styled.p`
  margin: 0;

  font-family: 'CormorantGaramond';
  font-size: 5rem;
`;

/* Bullet Option */
export const BulletOptionWrap = styled.div`
  flex: 1;

  padding: 2rem;
`;

/* Bullet Yours */
export const BulletYoursWrap = styled.div`
  flex: 1;

  padding: 2rem;
`;

/* Bullet Setting */
export const BulletSettingWrap = styled.div`
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BulletSettingButton = styled.button`
  width: 12rem;
  height: 2.5rem;

  margin: 0 0.5rem;
  border: 1px solid gray;
  border-radius: 2rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  color: black;
  background-color: white;

  &:hover {
    color: gray;
  }

  cursor: pointer;
`;
