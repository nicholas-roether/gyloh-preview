import { WithTheme, withTheme } from "@material-ui/core";
import React from "react";
import Page from "./static/Page";
import PageRouter from "./static/Router";

class App extends React.Component<WithTheme> {
	render() {
		const { theme } = this.props;
		return (
			<div id="app" style={{
				background: theme.palette.background.default
			}}>
				<PageRouter wrapper={Page} />
			</div>
		);
	}
}

export default withTheme(App);