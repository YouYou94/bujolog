import { customAlphabet } from 'nanoid';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createKey, deleteKey, updateKey } from '../../store/modules/KeyModule';
import KeySettingPresenter from './KeySettingPresenter';

const MENUAL = {
  title: 'KEY SETTING',
  captionList: [
    '이곳을 불렛저널 키를 세팅하는 페이지입니다.',
    '처음 이용하는 분들을 위해 예시 키를 제공해드립니다.',
    '나머지는 아래의 사용법을 참고해주세요.',
    '1. 원하는 아이콘을 선택하세요.',
    '2. 자신만의 규칙을 작성하세요.',
    '3. 엔터키를 클릭하여 설정을 완료하세요.',
    '4. 자신만의 커스텀 키를 만들어보세요.',
  ],
};

export const CREATE_METHOD = '키 추가하기';
export const UPDATE_METHOD = '키 변경하기';
export const DELETE_METHOD = '키 삭제하기';

const KeySettingContainer = () => {
  const modalRef = useRef();

  const dispatch = useDispatch();
  const keyList = useSelector(state => state.key.key);

  const nanoid = customAlphabet('0123456789abcdefghijklmnop', 8);

  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState({
    method: '',
    icon: '',
    id: '',
    description: '',
  });
  const [modalInputValid, setModalInputValid] = useState('');

  const onInitialSelectKeyAndModalInputValid = () => {
    setSelectedKey({
      method: '',
      icon: '',
      id: '',
      description: '',
    });

    setModalInputValid('');
  };

  /* 모달 기능 */
  const handleClickModalIcon = event => {
    const { id } = event.currentTarget;

    setSelectedKey({ ...selectedKey, icon: id });
  };

  const handleChangeModalInput = event => {
    const { value } = event.target;

    setSelectedKey({ ...selectedKey, description: value });

    setModalInputValid('');
  };

  const handleDisplayModal = () => setIsDisplayModal(true);

  /* CRUD 기능 */
  const handleSelectKey = event => {
    const { id } = event.currentTarget;

    if (!id) {
      handleDisplayModal();
      setSelectedKey({ ...selectedKey, id: nanoid(), method: CREATE_METHOD });
      return;
    }

    handleDisplayModal();

    const { icon, description } = keyList.find(key => key.id === id);

    setSelectedKey({
      method: UPDATE_METHOD,
      icon,
      id,
      description,
    });
  };

  const handleCreateKey = event => {
    const { key } = event;

    if (key === 'Enter') {
      if (!selectedKey.description) {
        setModalInputValid('빈 규칙은 사용할 수 없습니다!');
        return;
      }

      dispatch(createKey({ selectedKey }));
      setIsDisplayModal(false);
      onInitialSelectKeyAndModalInputValid();
    }
  };

  const handleUpdateKey = event => {
    const { key } = event;

    if (key === 'Enter') {
      if (!selectedKey.description) {
        setModalInputValid('빈 규칙은 사용할 수 없습니다!');
        return;
      }

      dispatch(updateKey({ selectedKey }));
      setIsDisplayModal(false);
      onInitialSelectKeyAndModalInputValid();
    }
  };

  const handleDeleteKey = event => {
    const { id } = event.currentTarget;

    dispatch(deleteKey({ id }));
  };

  /* 모달 영역 밖 클릭 시 모달창 닫힘 기능 */
  const handleClickOutSide = event => {
    if (isDisplayModal && !modalRef.current.contains(event.target)) {
      setIsDisplayModal(false);
      onInitialSelectKeyAndModalInputValid();
    }
  };

  useEffect(() => {
    if (isDisplayModal)
      document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <KeySettingPresenter
      modalRef={modalRef}
      MENUAL={MENUAL}
      keyList={keyList}
      isDisplayModal={isDisplayModal}
      selectedKey={selectedKey}
      modalInputValid={modalInputValid}
      handleClickModalIcon={handleClickModalIcon}
      handleChangeModalInput={handleChangeModalInput}
      handleCreateKey={handleCreateKey}
      handleUpdateKey={handleUpdateKey}
      handleDeleteKey={handleDeleteKey}
      handleSelectKey={handleSelectKey}
    />
  );
};

export default KeySettingContainer;
