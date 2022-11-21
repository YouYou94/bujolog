import styled from 'styled-components';

export const CalendarItemContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(220, 220, 220);

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

  font-family: 'GowunDodum';
`;
