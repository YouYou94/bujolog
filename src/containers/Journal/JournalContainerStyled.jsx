import styled from 'styled-components';

export const ParentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
`;

export const ChildContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border: ${prop => (prop.borderline ? '1px solid rgb(220, 220, 220)' : '')};
`;
