import { useNavigate } from 'react-router-dom';
import * as Styled from '../../styled.jsx';

const Myjournal = ({ user }) => {
  const navigate = useNavigate();
  return (
    <Styled.HeaderNavItem onClick={() => navigate(`/bujolog/${user.url}`)}>
      내 저널
    </Styled.HeaderNavItem>
  );
};

export default Myjournal;
