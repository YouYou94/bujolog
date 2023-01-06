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

export const Input = styled.input`
  width: 30rem;
  height: 4rem;

  padding: 1rem;
  border: 1px solid rgb(204, 204, 204);

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;
`;

export const ValidLabel = styled.label`
  width: 30rem;
  height: 2rem;

  padding: 0 1rem;

  font-family: 'GowunDodum';
  font-size: 1.1rem;

  color: red;
`;
