import styled from 'styled-components';

export const AuthLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 25rem;
  height: 2.5rem;

  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: none;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  background-color: rgb(120, 200, 200);
  color: white;
`;

export const Mode = styled.span`
  margin-bottom: 1rem;

  font-family: 'CormorantGaramond';
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: rgb(111, 138, 255);
  }
`;

export const SocialBox = styled.div`
  display: flex;
`;
