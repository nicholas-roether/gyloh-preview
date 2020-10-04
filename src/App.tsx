import { Box, createStyles, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import PageRouter from "./static/Router";

type ThemeMap = Record<string, Theme>;

const useStyles = makeStyles(theme => createStyles({
	app: {
		overflow: "hidden",
		background: theme.palette.background.default,
		height: "100%",
		color: theme.palette.text.primary
	}
}));

export interface AppProps {
	initialTheme: string,
	themes: ThemeMap
}

const App: React.FC<AppProps> = props => {
	const [themeName, setThemeName] = React.useState<string>(props.initialTheme);
	const classes = useStyles();
	const theme = props.themes[themeName];
	return (
		<ThemeProvider theme={theme}>
			<Box id="app" className={classes.app}>
				<PageRouter onThemeChage={() => setThemeName(prev => prev === "light" ? "dark" : "light")} />
			</Box>
		</ThemeProvider>
	)
};

export default App;