import styled from 'styled-components';
import HomeImage from '../../../img/Background/HomeImage.jpg';

export const ImageLayout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  background-image: url(${HomeImage});
  background-color: rgb(0, 0, 0, 0.65);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DefaultLayout = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204);

  background-color: rgb(245, 245, 245);
`;
