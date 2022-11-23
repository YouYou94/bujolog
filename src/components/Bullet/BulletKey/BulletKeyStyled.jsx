import styled from 'styled-components';

/* Key */
export const KeyContainer = styled.div`
  height: calc(100vh - 11rem);

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(120, 200, 200);
  }

  @media screen and (max-width: 1024px) {
    height: calc(100vh - 16rem);
  }
`;

/* Key List */
export const KeyWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  margin: 0.8rem 0;
  padding: 0.5rem 3rem;

  &:hover {
    border: 2px solid rgb(120, 200, 200);
  }

  @media screen and (max-width: 1024px) {
    height: 2rem;
    margin: 0.4rem 1rem;
    padding: 0 1rem;
  }
`;

export const IconWrapper = styled.div`
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 1.5rem;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  margin: 0 1rem;
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

export const Description = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;

  margin: 0 5rem 0 1rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 7rem;

  margin: 0 0.5rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 0.5rem;

  color: gray;

  &:hover {
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 1024px) {
    width: 5rem;
  }
`;

/* Add Key */
export const AddKeyWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  margin: 0.8rem 1rem;
  border: 2px solid rgb(0, 0, 0, 0.5);
  padding: 0.5rem 2rem;

  @media screen and (max-width: 1024px) {
    padding: 0.5rem 1rem;
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

export const AddDescription = styled.input`
  width: 100%;
  height: 2rem;

  border: none;
  margin: 0 5rem 0 1rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;

  &:focus {
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 1rem 0 1rem;
    font-size: 1rem;
  }
`;

export const AddButton = styled.button`
  width: 7rem;

  margin: 0 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  color: black;

  &:hover {
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 1024px) {
    width: 5rem;
  }
`;
