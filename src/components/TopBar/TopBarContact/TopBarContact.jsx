import * as Styled from './TopBarContactStyled.jsx';
import BlogContact from './ContactContents/BlogContact.jsx';
import EmailContact from './ContactContents/EmailContact.jsx';
import GithubContact from './ContactContents/GithubContact.jsx';

const TopBarContact = () => {
  return (
    <Styled.TopBarContactContainer>
      <GithubContact />
      <BlogContact />
      <EmailContact />
    </Styled.TopBarContactContainer>
  );
};

export default TopBarContact;
