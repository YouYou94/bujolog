import CoverCaption from '../../components/Cover/CoverCaption.jsx';
import CoverContents from '../../components/Cover/CoverContents.jsx';
import * as Styled from './CoverPageStyled.jsx';

const CoverPage = () => {
  return (
    <>
      <Styled.Caption>
        <CoverCaption />
      </Styled.Caption>
      <Styled.Contents>
        <CoverContents />
      </Styled.Contents>
    </>
  );
};

export default CoverPage;
