import { useNavigate } from 'react-router-dom';
import * as Styled from './MineStyled.jsx';

const NewbieMessage = () => {
  const navigate = useNavigate();

  return (
    <Styled.NewbieMessageContainer>
      <Styled.NewbieMessageTextWrap>
        <Styled.Text>
          <Styled.TextEmphasis>Bujo-log</Styled.TextEmphasis> 를 찾아주셔서
          감사합니다.
        </Styled.Text>
        <Styled.Text>처음이신가요?</Styled.Text>
        <Styled.Text>
          시작하기 버튼을 클릭하여, 자신만의 이야기를 작성해보세요.
        </Styled.Text>
      </Styled.NewbieMessageTextWrap>
      <Styled.Button onClick={() => navigate('/bujolog/make')}>
        시작하기
      </Styled.Button>
    </Styled.NewbieMessageContainer>
  );
};

export default NewbieMessage;
