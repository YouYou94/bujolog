// Contact Components
import { ContactBlog } from './ContactBlog.jsx';

// styled-components
import * as Styled from '../../MenuStyled.jsx';
import { ContactGithub } from './ContactGithub.jsx';

const Contact = () => {
  return (
    <Styled.ContactWrapper>
      {/* 깃허브 */}
      <ContactGithub />
      {/* 블로그 */}
      <ContactBlog />
      {/* 이메일 */}
      <Styled.ContactEmail />
    </Styled.ContactWrapper>
  );
};

export default Contact;
