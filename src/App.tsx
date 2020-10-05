import { Box, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Page from "./static/Page";
import PageRouter from "./static/PageRouter";

type ThemeMap = Record<string, Theme>;

const useStyles = makeStyles((theme: Theme) => ({
	app: {
		overflow: "hidden",
		height: "100%",
	},
	page: {
		transition: theme.transitions.create(["transform, opacity"], {
			easing: theme.transitions.easing.easeIn,
			duration: "200ms"
		})
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
	const onThemeChange = () => setThemeName(prev => prev === "light" ? "dark" : "light");
	return (
		<ThemeProvider theme={theme}>
			<Box 
				id="app" 
				className={classes.app}
				bgcolor={theme.palette.background.default}
				color={theme.palette.text.primary}
			>
				<PageRouter>
					{content => (
						<Page onThemeChange={onThemeChange}>
							{content}
						</Page>
					)}
				</PageRouter>
			</Box>
		</ThemeProvider>
	)
};

export default App;