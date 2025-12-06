import styled from 'styled-components';

export const StyledContainer = styled.main`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 1440px;
  margin: 0 auto;
`;
