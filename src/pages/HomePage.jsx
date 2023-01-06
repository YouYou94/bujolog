import { useParams } from 'react-router-dom';
import {
  CommonContainer,
  ViewContainer,
  WriteContainer,
  Cover,
  EnrolUser,
  LoadUser,
} from '../components';

export function HomePage() {
  const params = useParams();

  return (
    <CommonContainer>
      <WriteContainer>
        <Cover />
      </WriteContainer>
      <ViewContainer>
        {params.id === 'enrol' ? <EnrolUser /> : ''}
        {params.id === 'load' ? <LoadUser /> : ''}
      </ViewContainer>
    </CommonContainer>
  );
}
