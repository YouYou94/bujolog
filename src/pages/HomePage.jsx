import {
  CommonContainer,
  ViewContainer,
  WriteContainer,
  EnrolUser,
} from '../components';

export function HomePage() {
  return (
    <CommonContainer>
      <WriteContainer>
        <EnrolUser />
      </WriteContainer>
      <ViewContainer></ViewContainer>
    </CommonContainer>
  );
}
