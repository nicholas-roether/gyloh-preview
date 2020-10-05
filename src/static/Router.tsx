import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import News from "../news/News";
import Page from "./Page";

const useStyles = makeStyles((theme: Theme) => ({
	page: {
		transition: theme.transitions.create(["transform, opacity"], {
			easing: theme.transitions.easing.easeIn,
			duration: "200ms"
		})
	}
}));

export interface PageRouterProps {
	onThemeChage?: () => void;
}

const PageRouter: React.FC<PageRouterProps> = props => {
	const classes = useStyles();
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Page onThemeChange={props.onThemeChage} className={classes.page}>
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

export default PageRouter;