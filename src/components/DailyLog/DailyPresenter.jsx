import { ButtonBox, ImageLayout, Menual, BackButton } from '../index';
import { CREATE_METHOD } from './DailyContainer';
import * as Styled from './DailyStyled';

const DailyPresenter = ({
  MENUAL,
  modalRef,
  createRef,
  today,
  userKeyList,
  userDailyLogList,
  isDisplayModal,
  createState,
  handleDisplayModal,
  handleChangeCreateStateLog,
  handleClickIcon,
  handleCreateDailyLog,
  handleDeleteDailyLog,
}) => {
  return (
    <ImageLayout>
      <Menual title={MENUAL.title} captionList={MENUAL.captionList} />
      <Styled.Container>
        <Styled.DailyLogBox>
          <Styled.TodayLabel>{today}</Styled.TodayLabel>
          <Styled.LogList>
            {userDailyLogList[today]?.map(dailylog => {
              const { id, key, log } = dailylog;

              return (
                <Styled.LogItem key={id} id={id}>
                  <Styled.LogView>
                    <Styled.Icon icon={key} />
                    <Styled.Log>{log}</Styled.Log>
                  </Styled.LogView>
                  <Styled.DeleteButton>체크</Styled.DeleteButton>
                  <Styled.DeleteButton id={id} onClick={handleDeleteDailyLog}>
                    삭제
                  </Styled.DeleteButton>
                </Styled.LogItem>
              );
            })}
            {createState.method === CREATE_METHOD ? (
              <Styled.LogItem ref={createRef}>
                <Styled.LogView isCreate={true}>
                  <Styled.Icon icon={createState.key} />
                  <Styled.LogInput
                    value={createState.log}
                    onChange={handleChangeCreateStateLog}
                    placeholder="로그를 작성해주세요."
                    onKeyPress={handleCreateDailyLog}
                  />
                </Styled.LogView>
              </Styled.LogItem>
            ) : (
              <Styled.CreateLabel onClick={handleDisplayModal}>
                클릭하여 추가하기
              </Styled.CreateLabel>
            )}
          </Styled.LogList>
        </Styled.DailyLogBox>
        <ButtonBox>
          <BackButton>뒤로가기</BackButton>
        </ButtonBox>
        <Styled.ModalBox ref={modalRef} isDisplay={isDisplayModal}>
          {userKeyList.map(key => {
            const { id, icon, description } = key;
            return (
              <Styled.ModalIconBox
                key={id}
                title={description}
                onClick={handleClickIcon}
                isSelected={createState.key === icon}
                id={icon}
              >
                <Styled.ModalIcon icon={icon} />
              </Styled.ModalIconBox>
            );
          })}
        </Styled.ModalBox>
      </Styled.Container>
    </ImageLayout>
  );
};

export default DailyPresenter;
