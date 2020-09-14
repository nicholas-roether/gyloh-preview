import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./home/Home";

export default class App extends React.Component<{}> {

	render() {
		return (
			<div id="app">
				<Router>
					<Switch>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}