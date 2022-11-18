import { createContext, useState } from 'react';
import BulletCaption from '../components/Bullet/BulletCaption.jsx';
import BulletContents from '../components/Bullet/BulletContents.jsx';
import * as Styled from './PageStyled.jsx';

export const BulletContext = createContext();

const BulletPage = () => {
  const [isTool, setIsTool] = useState(false);
  const [key, setKey] = useState('');

  return (
    <>
      <BulletContext.Provider value={{ isTool, setIsTool, key, setKey }}>
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
