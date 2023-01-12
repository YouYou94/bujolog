import * as Styled from './TitleStyled';

export const Title = ({ width, size, color, isShadow, children }) => {
  return (
    <Styled.Title width={width} size={size} color={color} isShadow={isShadow}>
      {children}
    </Styled.Title>
  );
};
