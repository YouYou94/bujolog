// Contact Components
import { ContactBlog } from './ContactBlog.jsx';
import { ContactGithub } from './ContactGithub.jsx';
import { ContactEmail } from './ContactEmail.jsx';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

const Contact = () => {
  return (
    <Styled.ContactWrapper>
      {/* 깃허브 */}
      <ContactGithub />
      {/* 블로그 */}
      <ContactBlog />
      {/* 이메일 */}
      <ContactEmail />
    </Styled.ContactWrapper>
  );
};

export default Contact;
