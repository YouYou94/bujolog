import styled from 'styled-components';

/* TopBar Home Components */
export const HomeWrapper = styled.div`
  width: 5rem;

  padding: 0 2rem;

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

/* TopBar Title Components */
export const Title = styled.h1`
  padding: 0 2rem;

  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  user-select: none;
`;

export const Name = styled.h1`
  padding: 0 2rem;

  font-family: 'GowunDodum';
  font-size: 1.5rem;

  user-select: none;
`;

/* TopBar Notice Components */
export const NoticeWrapper = styled.div`
  width: 5rem;
`;
