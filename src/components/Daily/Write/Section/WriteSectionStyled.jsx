import styled from 'styled-components';

export const DailyLogLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const LogBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const AddBox = styled.div`
  height: 2rem;

  display: flex;
`;

export const AddItem = styled.div`
  flex: 1;

  display: flex;
`;

export const KeyWrapper = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Key = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogInput = styled.input`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(220, 220, 220);

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  background-color: transparent;

  outline: none;
`;

export const AddButton = styled.button``;
