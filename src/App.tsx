import { Box, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import PageRouter from "./static/PageRouter";

type ThemeMap = Record<string, Theme>;

const useStyles = makeStyles({
	app: {
		overflow: "hidden",
		height: "100%",
	}
});

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
			<Box 
				id="app" 
				className={classes.app}
				bgcolor={theme.palette.background.default}
				color={theme.palette.text.primary}
			>
				<PageRouter onThemeChage={() => setThemeName(prev => prev === "light" ? "dark" : "light")} />
			</Box>
		</ThemeProvider>
	)
};

export default App;