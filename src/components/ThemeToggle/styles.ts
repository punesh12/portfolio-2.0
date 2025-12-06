import styled from 'styled-components';

export const StyledToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => (theme.colors as any).hoverBg || theme.colors.surface};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledIcon = styled.span`
  font-size: 18px;
  line-height: 1;
`;
