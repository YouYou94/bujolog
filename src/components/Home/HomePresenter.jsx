import { ImageLayout, Title } from '../index';
import * as Styled from './HomeStyled';

const HomePresenter = ({
  name,
  isDisplayInput,
  validMessage,
  onHandlerClickText,
  onHandlerChangeName,
  onHandlerPressEnter,
}) => {
  return (
    <ImageLayout>
      <Styled.Container>
        <Title size={7} color={'rgb(245, 245, 245)'} isShadow={true}>
          BUJOLOG
        </Title>
        {isDisplayInput ? (
          <Styled.EnrolBox>
            <Styled.UserInput
              value={name}
              onChange={onHandlerChangeName}
              onKeyPress={onHandlerPressEnter}
              placeholder="이름이나 닉네임을 입력해주세요."
            />
            <Styled.ValidLabel>{validMessage}</Styled.ValidLabel>
          </Styled.EnrolBox>
        ) : (
          <Styled.GuideBox>
            <Styled.Text onClick={onHandlerClickText}>Click Me</Styled.Text>
            <Styled.GuideText>← 여기를 클릭해주세요.</Styled.GuideText>
          </Styled.GuideBox>
        )}
      </Styled.Container>
    </ImageLayout>
  );
};

export default HomePresenter;
