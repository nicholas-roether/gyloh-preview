import React from "react";
import Page from "./static/Page";
import PageRouter from "./static/Router";

export default class App extends React.Component {

	render() {
		return (
			<div id="app">
				<PageRouter wrapper={Page} />
			</div>
		);
	}
}