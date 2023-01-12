import * as Styled from './LayoutStyled';

export const ImageLayout = ({ children, isFull, isHalf }) => {
  return <Styled.ImageLayout>{children}</Styled.ImageLayout>;
};

export const DefaultLayout = ({ children }) => {
  return <Styled.DefaultLayout>{children}</Styled.DefaultLayout>;
};
