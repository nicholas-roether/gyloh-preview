import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import News from "../news/News";
import Page from "./Page";

export interface RouterProps {
	onThemeChage?: () => void;
}

export default class PageRouter extends React.Component<RouterProps> {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Page onThemeChange={this.props.onThemeChage}>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/news/:name">
							<News />
						</Route>
						<Route path="*" component={Error404} />
					</Switch>
				</Page>
			</Router>
		);
	}
}