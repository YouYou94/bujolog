import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './Styled.jsx';

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Styled.Layout>
      <Styled.Title onClick={() => navigate('/bujolog')}>bujolog</Styled.Title>
      <Styled.Nav>
        <Link to="">
          <Styled.Menu>마이페이지</Styled.Menu>
        </Link>
        <Styled.Menu>로그아웃</Styled.Menu>
      </Styled.Nav>
    </Styled.Layout>
  );
};

export default TopBar;
