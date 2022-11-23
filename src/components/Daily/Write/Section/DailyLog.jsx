import { useState } from 'react';
import * as Styled from './WriteSectionStyled.jsx';

const DailyLog = () => {
  const [isAdd, setIsAdd] = useState(false);

  const handleOnClick = () => {
    console.log('안녕');
  };
  // 버튼에 적용할 클릭 이벤트 함수

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  // 인풋에 적용할 Enter 키 입력 함수

  return (
    <Styled.DailyLogLayout>
      <Styled.LogBox>
        <Styled.AddBox>
          {isAdd ? (
            <Styled.AddItem>
              <Styled.KeyWrapper>
                <Styled.Key icon={''} />
              </Styled.KeyWrapper>
              <Styled.LogInput />
            </Styled.AddItem>
          ) : (
            <Styled.AddButton onClick={() => setIsAdd(!isAdd)}>
              클릭하여 추가하기
            </Styled.AddButton>
          )}
        </Styled.AddBox>
      </Styled.LogBox>
    </Styled.DailyLogLayout>
  );
};

export default DailyLog;
