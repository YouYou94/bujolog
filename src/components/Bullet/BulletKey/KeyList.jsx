import { useSelector } from 'react-redux';
import Key from './Key.jsx';

const KeyList = () => {
  const bullet = useSelector(state => state.bullet.bullet);

  const keyList = bullet.map((item, index) => {
    return <Key item={item} index={index} key={index} />;
  });

  return keyList;
};

export default KeyList;
