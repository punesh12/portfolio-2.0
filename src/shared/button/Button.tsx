import styled, { ThemeProps, css } from 'styled-components'
import { Theme, borderRadius } from '../../styles/theme'

type buttonVariants = 'primary' | 'secondary' | 'link'

type ButtonProps = {
  variant: buttonVariants
  imageUrl?: string
  text?: string
  onClick?: () => void
  gradientButton?: boolean
}

interface I_ButtonContainerProps {
  variant: string
  gradientButton?: boolean
  onClick?: () => void
}

const ButtonContainer = styled.button<I_ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  height: 50px;
  width: max-content;
  min-width: 120px;
  border-radius: ${borderRadius.XS};
  border: none;
  outline: none;
  font-family: Regular;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &.active {
    transform: scale(0.95);
  }

  &:hover {
    box-shadow: 5px 10px 15px -1px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background: ${(props: any) =>
        props.gradientButton ? props.theme.gradient : props.theme.textColor};
      color: ${(props: ThemeProps<Theme>) => props.theme.background} !important;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: transparent;
      color: ${(props: ThemeProps<Theme>) => props.theme.textColor} !important;
      border: ${(props: ThemeProps<Theme>) =>
        `1px solid ${props.theme.textColor}`};
    `}

    ${(props) =>
    props.variant === 'link' &&
    css`
      color: blue;
      background: none;
      border: none;
    `}
`

const Button = ({
  variant = 'primary',
  imageUrl,
  text,
  onClick,
  gradientButton,
}: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      gradientButton={gradientButton}
    >
      {imageUrl && <img src={imageUrl} alt="button image" />}
      {text && <>{text}</>}
    </ButtonContainer>
  )
}

export default Button
