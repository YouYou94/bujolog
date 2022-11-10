import { useSelector } from 'react-redux';
import * as Styled from '../NewbieStyled.jsx';

const ManualText = () => {
  const userName = useSelector(state => state.userReducer.name);

  return (
    <Styled.ManualWrap>
      <Styled.Text>
        안녕하세요. <Styled.TextEmphasis>{userName}</Styled.TextEmphasis> 님
      </Styled.Text>
      <Styled.Text>
        <Styled.TextEmphasis>Bujo-log</Styled.TextEmphasis> 에 오신 것을
        환영합니다.
      </Styled.Text>
      <Styled.Text>
        <Styled.TextEmphasis>시작하기</Styled.TextEmphasis> 버튼을 클릭하여,
      </Styled.Text>
      <Styled.Text>
        자신만의 <Styled.TextEmphasis>Bullet</Styled.TextEmphasis> 을 설정하고
      </Styled.Text>
      <Styled.Text>
        자신만의 <Styled.TextEmphasis>Journal</Styled.TextEmphasis> 을 모두에게
        들려주세요.
      </Styled.Text>
    </Styled.ManualWrap>
  );
};

export default ManualText;
