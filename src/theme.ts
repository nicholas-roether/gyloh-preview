import { createMuiTheme, SimplePaletteColorOptions } from "@material-ui/core/styles";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

const typography: TypographyOptions = {
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
}

const primary: SimplePaletteColorOptions = {
	main: "#002860",
	contrastText: "#fff",
}

const secondary: SimplePaletteColorOptions = {
	main: "#6184d8",
	contrastText: "#fff",
}

export const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		primary,
		secondary,
		background: {
			default: "#fff"
		}
	},
	typography
});

export const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary,
		secondary,
		background: {
			default: "#131313",
			paper: "#373f43"
		},
	},
	typography
});