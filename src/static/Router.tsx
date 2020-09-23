import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error404 from "../error/Error404";
import Home from "../home/Home";

export interface RouterProps {
	wrapper: React.ElementType;
}

export default class PageRouter extends React.Component<RouterProps> {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				{React.createElement(this.props.wrapper, {}, 
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="*" component={Error404} />
					</Switch>
				)}
			</Router>
		);
	}
}