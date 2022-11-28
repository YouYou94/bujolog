import { useRef, useState, useEffect } from 'react';
import * as Styled from './HeadLineStyled.jsx';

const HeadLineText = 'Bullet Journal Log';

const HeadLine = () => {
  const headlineRef = useRef();
  const [headline, setHeadline] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadline(headline + HeadLineText[count]);
      setCount(count + 1);
    }, 200);
    if (count === HeadLineText.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <Styled.HeadLineBox>
      <Styled.HeadLine ref={headlineRef}>{headline}</Styled.HeadLine>
    </Styled.HeadLineBox>
  );
};

export default HeadLine;
