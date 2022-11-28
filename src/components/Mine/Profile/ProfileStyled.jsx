import styled from 'styled-components';

export const ProfileBox = styled.div`
  height: 8rem;

  display: flex;

  border-bottom: 1px solid rgb(220, 220, 220);
`;

export const ProfileImageBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 1rem 1rem;
`;

export const Image = styled.div`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;

  background-image: url(${prop => prop.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileInfoBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoText = styled.span`
  margin: 0.5rem 0;

  font-family: 'GowunDodum';
`;

export const EmphasisText = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NameInput = styled.input`
  width: 8rem;

  font-family: 'GowunDodum';

  outline: none;
`;

export const ProfileButton = styled.button`
  width: 3rem;

  margin-left: 0.5rem;

  font-family: 'GowunDodum';

  background-color: black;
  color: white;
`;

export const SignBox = styled.div`
  margin: 0.5rem 0;
`;

export const Logout = styled.span`
  margin-left: 0.3rem;
  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
