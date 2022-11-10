import styled from 'styled-components';

export const NewbieContainer = styled.div`
  height: 100%;

  flex: 1;
`;

/* Newbie Manual */
export const ManualContainer = styled.div`
  height: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ManualWrap = styled.div``;

export const Text = styled.p`
  color: gray;

  font-family: 'GowunDodum';

  cursor: pointer;

  ${ManualContainer}:hover & {
    color: black;
  }
`;

export const TextEmphasis = styled.em`
  color: gray;

  font-family: 'GowunDodum';

  cursor: pointer;

  ${ManualContainer}:hover & {
    font-weight: bold;
    color: black;
  }
`;

export const ManualButton = styled.button`
  width: 20rem;
  height: 2rem;

  margin-top: 2rem;
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
