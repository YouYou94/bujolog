import styled from 'styled-components';

export const SectionContainer = styled.div`
  flex: 1;

  display: flex;

  border-left: 2px solid rgb(220, 220, 220);
  border-right: 2px solid rgb(220, 220, 220);
  border-bottom: 2px solid rgb(220, 220, 220);

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: white;

  overflow: hidden;
`;

export const LogItemContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  height: 2.5rem;

  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0 2rem;

  &:hover {
    border: 2px solid rgb(120, 200, 200);
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0;
  }
`;

export const IconWrapper = styled.div`
  width: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

export const LogWrapper = styled.div`
  flex: 1;

  display: flex;

  margin: 0 1rem;

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 10rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 6rem;
  }
`;

export const Key = styled.div`
  width: 1.3rem;
  height: 1.3rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const Log = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  margin: 0 1rem 0 1rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  @media screen and (max-width: 1024px) {
    margin: 0 1rem;

    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 7rem;

  margin: 0 0.5rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 0.5rem;

  background-color: transparent;

  font-family: 'GowunDodum';

  color: gray;

  &:hover {
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 1024px) {
    width: 4rem;
  }
`;

/* Add Log */
/* 
  버튼
*/
export const AddLogWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;

export const AddLogButton = styled.div`
  font-family: 'GowunDodum';

  cursor: pointer;
`;

/* 
  추가될 아이템
*/
export const AddItemWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  margin: 1rem 1rem;
  border: 2px solid rgb(0, 0, 0, 0.5);
  padding: 0.5rem 0.5rem;

  &:hover {
    border: 2px solid rgb(120, 200, 200);
  }
`;

export const AddIconWrapper = styled.div`
  width: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: rgb(120, 200, 200, 0.3);
  }
`;

export const AddKey = styled.div`
  width: 1.3rem;
  height: 1.3rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  cursor: pointer;
`;

export const AddLog = styled.input`
  width: 100%;
  height: 2rem;

  border: none;
  margin: 0 0 0 1rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;

  &:focus {
    border-bottom: 1px solid black;
  }
`;

export const AddButton = styled.button`
  width: 7rem;

  margin: 0 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  background-color: transparent;

  font-family: 'GowunDodum';

  color: black;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
