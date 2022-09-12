import React, { SetStateAction, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  AppContainer,
  Header,
  MainContainer,
  Tab,
  TabContainer,
  ThemeButton,
  ThemeSwitchContainer,
  ThemeTitle,
} from "./App.style";
export enum ThemeType {
  DARK = "DARK_THEME",
  LIGHT = "LIGHT_THEME",
}
type ThemePalette = {
  primary: string[];
  secondary: string[];

  background: string[];
  text: string[];
};
type Theme = {
  palette: ThemePalette;
};
const dark: Theme = {
  palette: {
    primary: ["#e6e6e6", "#757575"],
    secondary: ["#CCCCCC", "#5E5E5E"],
    background: ["#757575", "#FFFFFF"],
    text: ["#FFFFFF", "#2e2e2e"],
  },
};
const light = {
  palette: {
    primary: ["#e6e6e6", "#757575"],
    secondary: ["#CCCCCC", "#B8B8B8"],
    background: ["#e6e6e6", "#FFFFFF"],
    text: ["#2e2e2e", "#2e2e2e"],
  },
};
const initialTabList = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
];

function App() {
  const [themeType, setThemeType] = useState(ThemeType.LIGHT);

  const [tabList, setTabList] = useState(initialTabList);
  const activeTab = useMemo(() => {
    return tabList.find((tab) => tab.isActive === true);
  }, [tabList]);
  const isLight = themeType === ThemeType.LIGHT;
  const defaultTheme = isLight ? light : dark;
  const handleSwitchTheme = useCallback(
    (value: SetStateAction<ThemeType>) => () => {
      setThemeType(value);
    },
    []
  );
  const onSwitchTab = useCallback(
    (id: number) => () => {
      setTabList((tabs) => {
        return tabs.map((tab) => {
          if (tab.id === id) {
            return { ...tab, isActive: true };
          }
          return { ...tab, isActive: false };
        });
      });
    },
    []
  );

  const onAddNewTab =
    (
      tabs: {
        id: number;
        isActive: boolean;
      }[]
    ) =>
    () => {
      setTabList([...tabs, { id: tabs.length + 1, isActive: false }]);
    };
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header>
          <ThemeSwitchContainer>
            <ThemeTitle>Theme:</ThemeTitle>
            <ThemeButton
              themeType={ThemeType.LIGHT}
              isActive={themeType === ThemeType.LIGHT}
              onClick={handleSwitchTheme(ThemeType.LIGHT)}
            />
            <ThemeButton
              themeType={ThemeType.DARK}
              isActive={themeType === ThemeType.DARK}
              onClick={handleSwitchTheme(ThemeType.DARK)}
            />
          </ThemeSwitchContainer>
        </Header>
        <TabContainer>
          {tabList.map((values, index) => (
            <Tab
              key={`tab-${index}`}
              onClick={onSwitchTab(values.id)}
              isActive={values.isActive}
            >
              Tab{values.id}
            </Tab>
          ))}
          <Tab onClick={onAddNewTab(tabList)}>+</Tab>
        </TabContainer>
        <MainContainer>Tab{activeTab?.id}</MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
