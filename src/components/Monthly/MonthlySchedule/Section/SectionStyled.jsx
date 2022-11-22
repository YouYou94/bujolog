import styled from 'styled-components';

export const CalendarItemContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(220, 220, 220);
  border: ${prop => (prop.isFocus ? '2px solid rgb(120, 200, 200)' : '')};

  cursor: pointer;

  &:hover {
    ${prop => (prop.isDisable ? '' : 'border: 2px solid rgb(120, 200, 200)')};
  }
`;

export const Date = styled.div`
  width: 2rem;

  font-family: 'IBMPlexSans';

  text-align: center;
`;

export const Day = styled.div`
  width: 2rem;

  font-family: 'IBMPlexSans';

  text-align: center;
`;

export const Text = styled.div`
  flex: 1;

  padding-left: 2rem;

  font-family: 'GowunDodum';
`;

export const DelButton = styled.div`
  width: 4rem;

  font-family: 'GowunDodum';

  color: rgb(220, 220, 220);

  &:hover {
    color: black;
  }
`;
