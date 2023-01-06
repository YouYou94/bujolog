import { useState } from 'react';
import {
  CommonContainer,
  ViewContainer,
  WriteContainer,
  Cover,
  EnrolUser,
  LoadUser,
} from '../components';

export function HomePage() {
  const [isEnrol, setIsEnrol] = useState(true);

  return (
    <CommonContainer>
      <WriteContainer>
        <Cover />
      </WriteContainer>
      <ViewContainer>
        {isEnrol ? (
          <EnrolUser setIsEnrol={setIsEnrol} />
        ) : (
          <LoadUser setIsEnrol={setIsEnrol} />
        )}
      </ViewContainer>
    </CommonContainer>
  );
}
