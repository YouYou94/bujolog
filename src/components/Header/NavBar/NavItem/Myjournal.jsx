import { useNavigate } from 'react-router-dom';
import * as Styled from '../../styled.jsx';

const Myjournal = () => {
  const navigate = useNavigate();
  return (
    <Styled.HeaderNavItem onClick={() => navigate('/bujolog/@:username')}>
      내 저널
    </Styled.HeaderNavItem>
  );
};

export default Myjournal;
