import * as Styled from '../styled.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubContact = () => {
  return (
    <Styled.TopBarContactSite
      href="https://github.com/YouYou94/bujolog"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </Styled.TopBarContactSite>
  );
};

export default GithubContact;
