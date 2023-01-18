import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204);
`;

export const DailyLogBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1rem;

  background-color: rgb(245, 245, 245);

  gap: 0.5rem;
`;

export const TodayLabel = styled.label`
  font-family: 'Anton';
  font-size: 2.5rem;
`;

export const LogList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 2rem 0 2rem;

  gap: 1rem;
`;

export const LogItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.5rem;
`;

export const LogView = styled.div`
  position: relative;

  flex: 1;

  height: 2.5rem;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 1rem;
  padding: 0 1rem;

  box-shadow: 0 5px 10px 0 hsl(240deg 5% 41% / 20%);

  background-color: rgb(255, 255, 255);

  cursor: pointer;

  transition: 0.2s all;

  gap: 1rem;

  ${prop =>
    prop.isCreate
      ? ''
      : '&:hover { transform: translateY(-10%); background-color: rgb(180, 200, 185);'}
`;

export const Icon = styled.div`
  width: 1.3rem;
  height: 1.3rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const Log = styled.label`
  flex: 1;

  font-family: 'GowunDodum';
  font-size: 1rem;

  cursor: pointer;
`;

export const LogInput = styled.input`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);

  font-family: 'GowunDodum';
  font-size: 1rem;

  outline: none;
`;

export const DeleteButton = styled.button`
  width: 4rem;
  height: 2.5rem;

  border: none;
  border-radius: 1rem;

  background-color: rgb(255, 255, 255);

  box-shadow: 0 5px 10px 0 hsl(240deg 5% 41% / 20%);

  font-family: 'GowunDodum';
  font-size: 1rem;

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    transform: translateY(-10%);

    background-color: rgb(180, 200, 185);
  }
`;

export const CheckLine = styled.div`
  position: absolute;

  left: 5%;

  width: 90%;

  border-top: 1px solid rgb(35, 35, 35);
`;

export const CreateLabel = styled.label`
  font-family: 'GowunDodum';
  font-size: 1.2rem;
  font-style: italic;

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    transform: translateY(-10%);

    text-decoration: underline;
  }
`;

/* 모달 */
export const ModalBox = styled.div`
  position: absolute;

  top: 0;
  left: ${prop => (prop.isDisplay ? '-100.1%' : '-200.1%')};

  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  padding: 2rem;

  background-color: rgb(245, 245, 245);

  gap: 1rem;

  transition: 0.3s all;
`;

export const ModalIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(204, 204, 204);
  border-radius: 50%;

  background-color: ${prop => (prop.isSelected ? 'rgb(180, 200, 185)' : '')};

  cursor: pointer;

  &:hover {
    background-color: rgb(180, 200, 185);
  }
`;

export const ModalIcon = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;
