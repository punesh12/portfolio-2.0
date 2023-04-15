import styled from "styled-components";
import { screenSizes } from "../../../../styles/theme";

interface I_SideNavProps {
    navCollapsed: boolean;
  }
  

export const StyledRoutesWrapper = styled.div<I_SideNavProps>`
display: block;
box-sizing: border-box;
@media (min-width: ${screenSizes.M}px) {
  display: grid;
  grid-template-columns: ${(props) =>
    props.navCollapsed ? '70px 1fr' : '210px 1fr'};
  height: 100vh;
}
`;

export const StyledRoutes = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
`;