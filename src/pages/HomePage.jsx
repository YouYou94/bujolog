import {
  CommonContainer,
  ViewContainer,
  WriteContainer,
  Cover,
  EnrolUser,
  LoadUser,
} from '../components';

export function HomePage() {
  return (
    <CommonContainer>
      <WriteContainer>
        <Cover />
      </WriteContainer>
      <ViewContainer>
        <EnrolUser />
      </ViewContainer>
    </CommonContainer>
  );
}
