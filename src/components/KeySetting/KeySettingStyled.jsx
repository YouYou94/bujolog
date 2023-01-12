import styled, { keyframes } from 'styled-components';

/* Setting */
export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const KeyBox = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 0 2rem;

  gap: 0.5rem;
`;

export const KeyList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  gap: 1rem;
`;

export const Key = styled.div`
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

  &:hover {
    transform: translateY(-10%);

    background-color: rgb(180, 200, 185);
  }
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const Description = styled.label`
  flex: 1;

  padding-left: 2rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 4rem;
  height: 2.5rem;

  border: none;
  border-radius: 1rem;

  background-color: rgb(255, 255, 255);

  box-shadow: 0 5px 10px 0 hsl(240deg 5% 41% / 20%);

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    transform: translateY(-10%);

    background-color: rgb(180, 200, 185);
  }
`;

export const CreateLabel = styled.label`
  margin-top: 1rem;
  padding-left: 2rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;
  font-style: italic;

  color: rgb(25, 25, 25);

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    transform: translateY(-10%);

    text-decoration: underline;
  }
`;

/* Modal */
const FadeIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%);
}
to{
  opacity: 1;
  transform: translate(-50%, -50%);
}`;

export const ModalBox = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 90%;
  height: 20rem;

  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  border: 1px solid rgb(204, 204, 204);
  padding: 1rem 1rem;

  box-shadow: 0px 5px 7px 4px hsl(240deg 5% 41% / 20%);

  background-color: rgb(255, 255, 255);

  animation: ${FadeIn} 0.3s ease-in-out;
`;

export const ModalIconListBox = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(204, 204, 204);

  gap: 0.5rem;
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

  cursor: pointer;
`;

export const ModalInput = styled.input`
  height: 3rem;

  border: 1px solid rgb(204, 204, 204);
  padding-left: 1rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;
`;

export const ModalValidLabel = styled.label`
  height: 1.5rem;

  padding-left: 1rem;

  font-family: 'GowunDodum';
  font-size: 1rem;
  font-weight: bold;

  color: rgb(255, 84, 84);
`;
