import { createGlobalStyle } from 'styled-components'

import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import { colors } from './theme'

export const GlobalStyle = createGlobalStyle`


@font-face{
    font-family: Regular;
    src:url(${PoppinsRegular}) format('truetype') ;
}
@font-face{
    font-family: Bold;
    src:url(${PoppinsBold}) format('truetype') ;
}

*{
margin:0;
    padding:0;
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
    font-family: PoppinsRegular, sans-serif;
    color:${colors.blackSecondary};
    font-size: 16px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}
`
