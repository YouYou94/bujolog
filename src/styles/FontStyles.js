import { createGlobalStyle } from 'styled-components';
import Nabla from './fonts/Nabla-Regular.ttf';
import BlackHanSans from './fonts/BlackHanSans-Regular.ttf';
import YeonSung from './fonts/YeonSung-Regular.ttf';
import GowunDodum from './fonts/GowunDodum-Regular.ttf';
import CormorantGaramond from './fonts/CormorantGaramond-MediumItalic.ttf';

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Nabla';
    src: url(${Nabla}) format('truetype');
}

@font-face {
    font-family: 'BlackHanSans';
    src: url(${BlackHanSans}) format('truetype');
}

@font-face {
    font-family: 'YeonSung';
    src: url(${YeonSung}) format('truetype');
}

@font-face {
    font-family: 'GowunDodum';
    src: url(${GowunDodum}) format('truetype');
}

@font-face {
    font-family: 'CormorantGaramond';
    src: url(${CormorantGaramond}) format('truetype');
}
  
`;

export default FontStyles;
