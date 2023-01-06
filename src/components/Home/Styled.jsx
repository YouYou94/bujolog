import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;

  gap: 1rem;
`;

/* Cover */
export const CoverTitle = styled.h1`
  font-family: 'GreatVibes';
  font-size: 5rem;

  text-align: center;
`;

export const CoverCaption = styled.h3`
  margin-top: 2rem;

  font-family: 'GowunDodum';
  font-size: 2rem;

  text-align: center;
`;

/* User */
export const Title = styled.h2`
  font-family: 'GowunDodum';
  font-size: 3rem;
`;

export const SubTitle = styled.label`
  font-style: italic;
  font-family: 'GowunDodum';
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 40rem;
  height: 4rem;

  padding: 1rem;
  border: 1px solid rgb(204, 204, 204);

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;
`;

export const LoadBox = styled.div`
  width: 40rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid rgb(155, 155, 155);
  border-radius: 1rem;
  padding: 0 1rem;

  box-shadow: 0 5px 10px 0 hsl(240deg 5% 41% / 20%);

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.1s;
  }
`;

export const LoadNickName = styled.label`
  font-family: 'GowunDodum';
  font-size: 1.4rem;
`;

export const LoadRecentDate = styled.label`
  padding: 0 1rem;

  font-style: italic;
  font-family: 'GowunDodum';

  text-align: end;
`;

export const ValidLabel = styled.label`
  width: 40rem;

  padding: 0 1rem;

  font-family: 'GowunDodum';
  font-size: 1.1rem;

  color: red;
`;

export const ChangeLabel = styled.label`
  width: 40rem;
  height: 2rem;

  padding: 0 1rem;

  font-style: italic;
  font-family: 'GowunDodum';
  font-size: 1.3rem;

  transition: 0.1s all;

  cursor: pointer;

  &:hover {
    font-size: 1.4rem;

    text-decoration: underline;
  }
`;

export const JournalLabel = styled.label`
  width: 35rem;

  font-family: 'CormorantGaramond';
  font-size: 3rem;
`;

export const JournalIndex = styled.div`
  width: 35rem;
  height: 4rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1rem;

  font-family: 'CormorantGaramond';
  font-size: 2rem;

  cursor: pointer;

  &:hover {
    background-color: rgb(120, 200, 200, 0.3);
  }
`;
