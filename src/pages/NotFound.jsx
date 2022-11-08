import { useNavigate } from 'react-router-dom';
import * as Styled from './PageStyled.jsx';

const NotFound = () => {
  const navigate = useNavigate();

  const returnMainPage = () => navigate('/bujolog');

  return (
    <Styled.PageContainer>
      <Styled.NotFoundContainer>
        <Styled.NotFoundTitle onClick={returnMainPage}>
          Bujo-log
        </Styled.NotFoundTitle>
        <Styled.NotFoundSubTitle>죄송합니다.</Styled.NotFoundSubTitle>
        <Styled.NotFoundSubTitle>
          요청하신 페이지를 찾을 수 없습니다.
        </Styled.NotFoundSubTitle>
        <Styled.NotFoundExplanation>
          방문하시려는 페이지의 주소가 잘못되었거나,
        </Styled.NotFoundExplanation>
        <Styled.NotFoundExplanation>
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </Styled.NotFoundExplanation>
        <Styled.NotFoundExplanation>
          입력하신 주소가 정확한지 한 번 확인해 주시기 바랍니다.
        </Styled.NotFoundExplanation>
        <Styled.NotFoundExplanation>감사합니다.</Styled.NotFoundExplanation>
        <Styled.NotFoundWrapper>
          <Styled.NotFoundButton onClick={returnMainPage}>
            메인으로 돌아가기
          </Styled.NotFoundButton>
        </Styled.NotFoundWrapper>
      </Styled.NotFoundContainer>
    </Styled.PageContainer>
  );
};

export default NotFound;
