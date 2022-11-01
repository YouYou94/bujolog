import * as Styled from '../styled.jsx';
import BlogContact from './ContactContents/BlogContact.jsx';
import EmailContact from './ContactContents/EmailContact.jsx';
import GithubContact from './ContactContents/GithubContact.jsx';

const Contact = () => {
  return (
    <Styled.TopBarContactContainer>
      <GithubContact />
      <BlogContact />
      <EmailContact />
    </Styled.TopBarContactContainer>
  );
};

export default Contact;
