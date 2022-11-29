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

export const DailyBox = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  padding-left: 1rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid rgb(220, 220, 220);
`;

export const Key = styled.div`
  width: 1rem;
  height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Log = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding-left: 1.5rem;

  font-family: 'GowunDodum';
`;

export const SettingButton = styled.button`
  border: none;

  background-color: transparent;

  font-family: 'GowunDodum';

  ${prop => (prop.log ? 'color: transparent;' : 'color: gray;')};

  ${DailyBox}:hover & {
    ${prop => (prop.log ? 'color: gray;' : '')};

    &:hover {
      color: black;
      text-decoration: underline;
    }
  }

  &:hover {
    color: black;
  }
`;

export const KeyWrapper = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const AddKey = styled.div`
  width: 1rem;
  height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;

  &:hover {
    background-color: rgb(120, 200, 200);
  }
`;

export const LogInput = styled.input`
  flex: 1;

  border: none;
  padding-left: 1.5rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

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

  padding-left: 2.5rem;
  border: none;

  background-color: transparent;

  font-family: 'GowunDodum';

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
