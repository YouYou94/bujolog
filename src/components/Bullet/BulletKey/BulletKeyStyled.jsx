import styled from 'styled-components';

/* Key */
export const KeyContainer = styled.div`
  flex: 1;
`;

export const KeyWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  margin: 0.8rem 0;
  padding: 0.5rem 3rem;

  &:hover {
    border: 2px solid rgb(120, 200, 200);
  }
`;

export const CommonWrapper = styled.div`
  width: ${prop => prop.width};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
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

export const DescriptionWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 10rem;

  display: flex;
  align-items: center;
`;

export const Key = styled.div`
  width: 1.3rem;
  height: 1.3rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const Description = styled.input`
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
`;

export const Button = styled.button`
  width: 3rem;

  margin: 0 0.5rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 0.5rem;

  color: gray;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

export const AddWrapper = styled.div`
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
`;

export const AddButton = styled.button`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  &:hover {
    background-color: rgb(220, 220, 220, 0.8);
    color: black;
  }
`;
