import * as Styled from '../../styled.jsx';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogContact = () => {
  return (
    <Styled.TopBarContactSite href="https://velog.io/@ybh4115" target="_blank">
      <FontAwesomeIcon icon={faBlog} />
    </Styled.TopBarContactSite>
  );
};

export default BlogContact;
