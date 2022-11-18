import { createContext, useState } from 'react';
import BulletCaption from '../components/Bullet/BulletCaption.jsx';
import BulletContents from '../components/Bullet/BulletContents.jsx';
import * as Styled from './PageStyled.jsx';

export const BulletContext = createContext();

const BulletPage = () => {
  const [isTool, setIsTool] = useState(false);
  const [keyIcon, setKeyIcon] = useState('');

  const value = { isTool, setIsTool, keyIcon, setKeyIcon };

  return (
    <>
      <BulletContext.Provider value={value}>
        <Styled.Caption>
          <BulletCaption />
        </Styled.Caption>
        <Styled.Contents>
          <BulletContents />
        </Styled.Contents>
      </BulletContext.Provider>
    </>
  );
};

export default BulletPage;
