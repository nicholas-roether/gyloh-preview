import { Box, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Page from "./static/Page";
import PageRouter from "./static/Router";

interface AppState<N> {
	theme: N
}

export type ThemeMap<N extends string> = Record<N, Theme>;

export interface AppProps<T extends ThemeMap<N>, N extends string> {
	initialTheme: N,
	themes: T
}

export default class App<T extends ThemeMap<N>, N extends string> extends React.Component<AppProps<T, N>, AppState<N>> {
	state = {theme: this.props.initialTheme}

	render() {
		const theme = this.props.themes[this.state.theme] as Theme;
		return (
			<ThemeProvider theme={theme}>
				<Box id="app" bgcolor={theme.palette.background.default} height="100%" color={theme.palette.type === "light" ? "#000" : "#fff"}>
					<PageRouter wrapper={Page} />
				</Box>
			</ThemeProvider>
		);
	}
}