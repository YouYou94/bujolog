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
  height: 3rem;

  display: flex;

  padding: 0.5rem 0;

  &:hover {
    border: 2px solid rgb(120, 200, 200);
  }
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

  cursor: pointer;
`;

export const Key = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-color: rgb(220, 220, 220, 0.5);
  }
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

export const ButtonWrapper = styled.div`
  width: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.button`
  color: gray;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
