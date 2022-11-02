import { createGlobalStyle } from 'styled-components';
import Nabla from './fonts/Nabla-Regular.ttf';

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Nabla';
    src: url(${Nabla}) format('truetype');
}
  
`;

export default FontStyles;
