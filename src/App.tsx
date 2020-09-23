import { Box, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import PageRouter from "./static/Router";

interface AppState {
	theme: string
}

export type ThemeMap = Record<string, Theme>;

export interface AppProps {
	initialTheme: string,
	themes: ThemeMap
}

export default class App extends React.Component<AppProps, AppState> {
	state = {theme: this.props.initialTheme}

	render() {
		const theme = this.props.themes[this.state.theme];
		return (
			<ThemeProvider theme={theme}>
				<Box id="app" bgcolor={theme.palette.background.default} height="100%" color={theme.palette.type === "light" ? "#000" : "#fff"}>
					<PageRouter onThemeChage={() => this.setState(prev => ({theme: prev.theme === "light" ? "dark" : "light"}))} />
				</Box>
			</ThemeProvider>
		);
	}
}