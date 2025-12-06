import styled from 'styled-components';

interface StyledGradientProps {
  $gradient: string;
}

export const StyledGradient = styled.div<StyledGradientProps>`
  background: ${({ $gradient }) => $gradient};
`;
