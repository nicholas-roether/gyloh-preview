import { Fade } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import Page from "./Page";

export interface RouterProps {
	onThemeChage?: () => void;
}

export default class PageRouter extends React.Component<RouterProps> {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Fade in={true} appear={true} timeout={0}>
					<Page onThemeChange={this.props.onThemeChage}>
						<Switch>
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="*" component={Error404} />
						</Switch>
					</Page>
				</Fade>
			</Router>
		);
	}
}