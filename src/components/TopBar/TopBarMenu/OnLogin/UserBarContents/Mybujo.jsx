import { useNavigate } from 'react-router-dom';
import * as Styled from '../../TopBarMenuStyled.jsx';

const Mybujo = ({ url }) => {
  const navigate = useNavigate();

  return (
    <Styled.TopBarUserMenuContent onClick={() => navigate(`/bujo/${url}`)}>
      나의저널
    </Styled.TopBarUserMenuContent>
  );
};

export default Mybujo;
