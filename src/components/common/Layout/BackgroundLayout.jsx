import styled from 'styled-components';
import HomeImage from '../../../img/Background/HomeImage.jpg';

export const BackgroundLayout = ({ children, isFull, isHalf }) => {
  return (
    <BackgroundContainer isFull isHalf>
      {children}
    </BackgroundContainer>
  );
};

export const BackgroundContainer = styled.div`
  ${prop => (prop.isFull ? 'width: 100% height: 100% display: flex;' : '')}
  ${prop => (prop.isHalf ? 'flex: 1; display:flex;' : '')}

  background-image: url(${HomeImage});
  background-color: rgb(0, 0, 0, 0.65);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
`;
