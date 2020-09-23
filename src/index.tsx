import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { lightTheme, darkTheme} from "./theme";
import { adjustHref } from "./util";

adjustHref();

const themeMap = {
	"light": lightTheme,
	"dark": darkTheme
}

ReactDOM.render(
	<App themes={themeMap} initialTheme="light" />,
	document.getElementById("root")
);