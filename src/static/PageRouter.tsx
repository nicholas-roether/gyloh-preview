import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ExternalRedirect from "../common/ExternalRedirect";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import News from "../news/News";

export type RouteHander = (content: React.ReactElement) => React.ReactElement;

export interface PageRouterProps {
	children: RouteHander
}

const PageRouter: React.FC<PageRouterProps> = props => {
	const handler = props.children;
	const switchElem = (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/news/:name">
				<News />
			</Route>
			<Route path="/newsletter">
				<ExternalRedirect href="https://subscribe.newsletter2go.com/?n2g=wi5y2fvr-plkndw13-j07&_ga=2.85204825.1133588827.1587851132-316422097.1587286407" />
			</Route>
			<Route path="*" component={Error404} />
		</Switch>
	)
	return (
		<Router basename={process.env.PUBLIC_URL}>
			{handler(switchElem)}
		</Router>
	);
}

export default PageRouter;