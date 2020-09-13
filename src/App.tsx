import React from "react";
import Page from "./common/Page";

export default class App extends React.Component<{}> {

	render() {
		return (
			<div id="app">
				<Page>
					<h1>Content</h1>
					<p>Page conent goes here</p>
				</Page>
			</div>
		);
	}
}