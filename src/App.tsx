import React from "react";
import HomePage from "./home/Home";

export default class App extends React.Component<{}> {

	render() {
		return (
			<div id="app">
				<HomePage />
			</div>
		);
	}
}