import {
  ButtonBox,
  DefaultLayout,
  ImageLayout,
  Menual,
  SettingButton,
} from '../index';
import { ICONLIST } from '../../Constants';
import * as Styled from './KeySettingStyled';
import { CREATE_METHOD } from './keySettingContainer';

const KeySettingPresenter = ({
  modalRef,
  MENUAL,
  keyList,
  isDisplayModal,
  selectedKey,
  modalInputValid,
  handleClickModalIcon,
  handleChangeModalInput,
  handleCreateKey,
  handleUpdateKey,
  handleDeleteKey,
  handleSelectKey,
  handleClickMoveOnBack,
}) => {
  return (
    <ImageLayout>
      <Menual title={MENUAL?.title} captionList={MENUAL?.captionList} />
      <DefaultLayout>
        {isDisplayModal ? (
          <Styled.ModalBox ref={modalRef}>
            <Styled.ModalIconListBox>
              {ICONLIST.map((icon, index) => {
                const isSelected = icon === selectedKey.icon;

                return (
                  <Styled.ModalIconBox
                    key={index}
                    id={icon}
                    isSelected={isSelected}
                    onClick={handleClickModalIcon}
                  >
                    <Styled.ModalIcon icon={icon} />
                  </Styled.ModalIconBox>
                );
              })}
            </Styled.ModalIconListBox>
            <Styled.ModalInput
              value={selectedKey.description}
              onChange={handleChangeModalInput}
              onKeyPress={
                selectedKey.method === CREATE_METHOD
                  ? handleCreateKey
                  : handleUpdateKey
              }
              placeholder="규칙을 입력해주세요."
            />
            <Styled.ModalValidLabel>{modalInputValid}</Styled.ModalValidLabel>
          </Styled.ModalBox>
        ) : (
          <></>
        )}
        <Styled.KeyBox>
          {keyList.map(key => {
            const { id, icon, description } = key;
            return (
              <Styled.KeyList key={id}>
                <Styled.Key id={id} onClick={handleSelectKey}>
                  <Styled.Icon icon={icon} />
                  <Styled.Description>{description}</Styled.Description>
                </Styled.Key>
                <Styled.DeleteButton id={id} onClick={handleDeleteKey}>
                  삭제
                </Styled.DeleteButton>
              </Styled.KeyList>
            );
          })}
          <Styled.CreateLabel onClick={handleSelectKey}>
            클릭하여 추가하기
          </Styled.CreateLabel>
        </Styled.KeyBox>
        <ButtonBox>
          <SettingButton handler={handleClickMoveOnBack}>
            뒤로가기
          </SettingButton>
        </ButtonBox>
      </DefaultLayout>
    </ImageLayout>
  );
};

export default KeySettingPresenter;
