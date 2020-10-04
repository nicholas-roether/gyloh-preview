import { Box, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import PageRouter from "./static/Router";

type ThemeMap = Record<string, Theme>;

export interface AppProps {
	initialTheme: string,
	themes: ThemeMap
}

const App: React.FC<AppProps> = props => {
	const [themeName, setThemeName] = React.useState<string>(props.initialTheme);
	const theme = props.themes[themeName];
	return (
		<ThemeProvider theme={theme}>
			<Box id="app" bgcolor={theme.palette.background.default} height="100%" color={theme.palette.text.primary}>
				<PageRouter onThemeChage={() => setThemeName(prev => prev === "light" ? "dark" : "light")} />
			</Box>
		</ThemeProvider>
	)
};

export default App;