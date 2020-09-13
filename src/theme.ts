import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#002860",
			contrastText: "#fff",
		},
		secondary: {
			main: "#6184d8",
			contrastText: "#fff",
			
		},
		background: {
			default: "#fff"
		}
	},
	typography: {
		fontFamily: "Roboto, sans-serif",
		fontSize: 13,
		button: {
			fontSize: 15,
			fontFamily: "Rubik, sans-serif",
			textTransform: "uppercase",
		}
	},
});

theme.spacing(2);

export default theme;