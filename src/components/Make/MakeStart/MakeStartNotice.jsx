import * as Styled from './MakeStartStyled.jsx';

// 안내문 더 추가하기 5~7줄
const MakeStartNotice = () => {
  return (
    <Styled.NoticeWrap>
      <Styled.NoticeText>
        <Styled.NoticeTextEmphasisEnglish>
          Bullet Journal - Log
        </Styled.NoticeTextEmphasisEnglish>
      </Styled.NoticeText>
      <Styled.NoticeText>
        자신만의{' '}
        <Styled.NoticeTextEmphasisEnglish>
          Bullet{' '}
        </Styled.NoticeTextEmphasisEnglish>
        을 설정하고,
      </Styled.NoticeText>
      <Styled.NoticeText>
        <Styled.NoticeTextEmphasisEnglish>
          Monthly, Weekly, Daily Log
        </Styled.NoticeTextEmphasisEnglish>{' '}
        를 기록하여,
      </Styled.NoticeText>
      <Styled.NoticeText>
        자신만의{' '}
        <Styled.NoticeTextEmphasisEnglish>
          Journal{' '}
        </Styled.NoticeTextEmphasisEnglish>
        을 만들어보세요.
      </Styled.NoticeText>
    </Styled.NoticeWrap>
  );
};

export default MakeStartNotice;
