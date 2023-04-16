import styled, { ThemeProps, keyframes } from 'styled-components'
import { Theme } from '../../styles/theme'

const rotate = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`
const tilt = keyframes`
0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 52px;
  height: 28px;
  border-radius: 100px;
  border: ${(props: ThemeProps<Theme>) =>
    `2px solid  ${props.theme.textColor}`};

  position: relative;
  transition: background-color 0.2s;

  .sun svg {
    position: absolute;
    top: 3px;
    right: 5px;
    z-index: 1;
    width: 18px;
    height: 18px;
    animation: ${rotate} 15s linear infinite;
  }

  .moon svg {
    fill: rgb(115, 192, 252);
    position: absolute;
    top: 3px;
    left: 5px;
    z-index: 1;
    width: 18px;
    height: 18px;
    animation: ${tilt} 5s linear infinite;
  }
`

export const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: 0.2s;
  background: ${(props: ThemeProps<Theme>) => props.theme.textColor};
  z-index: 2;

  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }
`
