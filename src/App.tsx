import React from "react";
import Page from "./static/Page";
import PageRouter from "./static/Router";
import theme from "./theme";

export default class App extends React.Component {
	render() {
		return (
			<div id="app" style={{
				background: theme.palette.background.default
			}}>
				<PageRouter wrapper={Page} />
			</div>
		);
	}
}