import styled, { css } from "styled-components";
import { ThemeType } from "./App";
import { palette } from "styled-theme";
export const AppContainer = styled.div`
  width: 95%;
  padding-top: 100px;
  margin: auto;
  display: grid;
  gap: 1px;
  box-sizing: border-box;
  @media (min-width: 981px) {
    width: 70%;
  }

  @media (min-width: 1400px) {
    width: 60%;
  }
  @media (min-width: 1800px) {
    width: 40%;
  }
`;
export const Header = styled.div`
  display: grid;
  justify-content: flex-end;
`;
export const ThemeSwitchContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
`;
export const ThemeTitle = styled.p``;
type IButtonProps = {
  themeType: string;
  isActive: boolean;
};
export const ThemeButton = styled.button<IButtonProps>`
  width: 40px;
  height: 25px;
  cursor: pointer;
  ${({ themeType }) =>
    themeType === ThemeType.LIGHT
      ? css`
          background: ${palette("primary", 0)};
        `
      : css`
          background: ${palette("primary", 1)};
        `}
  ${({ isActive }) =>
    isActive &&
    css`
      border: 3px solid blue;
    `}
`;

export const TabContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 10px;
  overflow-x: auto;
`;
type ITab = {
  isActive?: boolean;
};
export const Tab = styled.div<ITab>`
  width: 100px;
  height: 70px;
  background: ${palette("background", 1)};
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${palette("text", 1)};
  font-size: 18px;
  font-weight: 500;
  border: 3px solid ${palette("secondary", 0)};
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${palette("background", 0)};
      border: 3px solid ${palette("secondary", 1)};
      color: ${palette("text", 0)};
    `}
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 300px;
  background: ${palette("background", 0)};
  border: 4px solid ${palette("secondary", 1)};
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${palette("text", 0)};
  font-weight: 600;
  box-sizing: border-box;
`;
