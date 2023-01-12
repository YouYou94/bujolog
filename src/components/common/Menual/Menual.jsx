import * as Styled from './MenualStyled';

export const Menual = ({ title, captionList }) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.CaptionBox>
        {captionList?.map((caption, index) => {
          return <Styled.Caption key={index}>── {caption}</Styled.Caption>;
        })}
      </Styled.CaptionBox>
    </Styled.Container>
  );
};
