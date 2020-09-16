import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "../home/Home";

export interface RouterProps {
	wrapper: React.ElementType;
}

export default class PageRouter extends React.Component<RouterProps> {
	render() {
		return (
			<Router>
				{React.createElement(this.props.wrapper, {}, 
					<Switch>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				)}
			</Router>
		);
	}
}