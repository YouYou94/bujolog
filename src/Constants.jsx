import square from './img/BulletIcon/square.png';
import fillsquare from './img/BulletIcon/fillsquare.png';
import triangle from './img/BulletIcon/triangle.png';
import filltriangle from './img/BulletIcon/filltriangle.png';
import circle from './img/BulletIcon/circle.png';
import fillcircle from './img/BulletIcon/fillcircle.png';
import dot from './img/BulletIcon/dot.png';
import x from './img/BulletIcon/x.png';
import up from './img/BulletIcon/up.png';
import down from './img/BulletIcon/down.png';
import next from './img/BulletIcon/next.png';
import prev from './img/BulletIcon/prev.png';
import cake from './img/BulletIcon/cake.png';
import star from './img/BulletIcon/star.png';
import heart from './img/BulletIcon/heart.png';
import music from './img/BulletIcon/music.png';
import { customAlphabet } from 'nanoid';

export const ICONLIST = [
  square,
  fillsquare,
  triangle,
  filltriangle,
  circle,
  fillcircle,
  dot,
  x,
  up,
  down,
  next,
  prev,
  cake,
  star,
  heart,
  music,
];

export const SQUARE = square;
export const FILLSQUARE = fillsquare;
export const TRIANGLE = triangle;
export const FILLTRIANGLE = filltriangle;
export const CIRCLE = circle;
export const FILLCIRCLE = fillcircle;
export const DOT = dot;
export const X = x;
export const UP = up;
export const DOWN = down;
export const NEXT = next;
export const PREV = prev;
export const CAKE = cake;
export const STAR = star;
export const HEART = heart;
export const MUSIC = music;

const nanoid = () => {
  const randomID = customAlphabet('0123456789abcdefghijklmnop', 8);

  return randomID();
};

export const INITIALKEY = [
  {
    icon: DOT,
    id: nanoid(),
    description: '해야 할 일',
  },
  {
    icon: SQUARE,
    id: nanoid(),
    description: '완료',
  },
  {
    icon: NEXT,
    id: nanoid(),
    description: '일정 연기',
  },
  {
    icon: PREV,
    id: nanoid(),
    description: '일정 변경',
  },
];

export const MONTHNAME = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export const DAYSHORTNAME = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
