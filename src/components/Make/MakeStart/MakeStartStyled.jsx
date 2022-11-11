import styled from 'styled-components';

/* Start Notice */
export const NoticeWrap = styled.div`
  flex: 1;

  padding-top: 5rem;

  text-align: center;
`;

export const NoticeText = styled.p`
  font-family: 'GowunDodum';
  font-size: 1.5rem;
`;

export const NoticeTextEmphasisKorean = styled.em`
  font-family: 'GowunDodum';
  font-size: 2rem;
`;

export const NoticeTextEmphasisEnglish = styled.em`
  font-family: 'CormorantGaramond';
  font-size: 2rem;
`;

/* Button */
export const MakeStartButtonWrap = styled.div`
  height: 5rem;

  text-align: center;
`;

export const MakeStartButton = styled.button`
  width: 25rem;
  height: 2rem;

  margin-top: 1rem;
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
