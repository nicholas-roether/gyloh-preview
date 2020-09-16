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
		},
		h1: {
			fontFamily: "Rubik, sans-serif"
		},
		h2: {
			fontFamily: "Rubik, sans-serif"
		},
		h3: {
			fontFamily: "Rubik, sans-serif"
		},
		h4: {
			fontFamily: "Rubik, sans-serif"
		},
		h5: {
			fontFamily: "Rubik, sans-serif"
		},
		h6: {
			fontFamily: "Rubik, sans-serif"
		},
	},
});

theme.spacing(2);

export default theme;