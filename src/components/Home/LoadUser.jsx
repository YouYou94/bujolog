import { customAlphabet } from 'nanoid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Container,
  Title,
  LoadBox,
  LoadNickName,
  LoadRecentDate,
  ChangeLabel,
  ValidLabel,
} from './Styled';

export function LoadUser() {
  const nanoid = customAlphabet('0123456789abcedfghi', 6);
  const navigate = useNavigate();

  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const onHandlerClickLoad = event => {
    const { id } = event.target;

    //console.log(id);

    Swal.fire({
      title: '메뉴를 선택해주세요.',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '접속',
      denyButtonText: `삭제`,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('접속 완료!', '', 'success');
      } else if (result.isDenied)
        Swal.fire({
          title: '정말 삭제하시겠습니까?',
          text: '삭제 시 모든 정보가 사라집니다.',
          icon: 'warning',
          confirmButtonText: '삭제',
          confirmButtonColor: '#d33',
          showCancelButton: true,
        }).then(result => {
          if (result.isConfirmed) {
            const filter = userList.filter(user => user.id !== id);

            setUserList(filter);

            localStorage.setItem('user', JSON.stringify(filter));

            Swal.fire('삭제 완료!', '', 'success');
          }
        });
    });
  };

  return (
    <Container>
      <Title>사용자 불러오기</Title>
      {userList ? (
        userList.map(user => {
          return (
            <LoadBox key={nanoid()} id={user.id} onClick={onHandlerClickLoad}>
              <LoadNickName>{user.nickname}</LoadNickName>
              <LoadRecentDate>Last. {user.last_connect}</LoadRecentDate>
            </LoadBox>
          );
        })
      ) : (
        <ValidLabel>등록된 사용자가 없습니다!</ValidLabel>
      )}
      <ChangeLabel onClick={() => navigate('/bujolog/auth/enrol')}>
        ← 사용자를 등록하시겠습니까?
      </ChangeLabel>
    </Container>
  );
}
