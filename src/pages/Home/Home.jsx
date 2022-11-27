import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as Styled from './Styled.jsx';

const HeadLineText = 'Bullet Journal Log ';

const Home = () => {
  const headlineRef = useRef();
  const [headline, setHeadline] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadline(headline + HeadLineText[count]);
      setCount(count + 1);
    }, 100);
    if (count === HeadLineText.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <Styled.Layout>
      <Styled.HeadLineBox>
        <Styled.HeadLine ref={headlineRef}>{headline}</Styled.HeadLine>
      </Styled.HeadLineBox>
    </Styled.Layout>
  );
};

export default Home;
