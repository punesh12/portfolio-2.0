import { createGlobalStyle } from 'styled-components'

import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { colors } from './theme'

export const GlobalStyle = createGlobalStyle`


@font-face{
    font-family: Regular;
    src:url(${PoppinsRegular}) format('truetype') ;
    font-display: swap;
    font-weight: normal;
    font-style: normal;
}
@font-face{
    font-family: Medium;
    src:url(${PoppinsMedium}) format('truetype') ;
    font-display: swap;
    font-weight: normal;
    font-style: normal;

}
@font-face{
    font-family: SemiBold;
    src:url(${PoppinsSemiBold}) format('truetype') ;
    font-display: swap;
    font-weight: normal;
    font-style: normal;

}
@font-face{
    font-family: Bold;
    src:url(${PoppinsBold}) format('truetype') ;
    font-display: swap;
    font-weight: normal;
    font-style: normal;

}

*{
margin:0;
    padding:0;
    box-sizing: border-box;
    height: auto;
    scroll-behavior: smooth;
    width: 100%;
    font-family: Regular, sans-serif;
    color:${colors.blackSecondary};
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
}
`
