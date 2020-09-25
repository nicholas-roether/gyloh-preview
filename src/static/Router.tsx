import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import Page from "./Page";

const styles = (theme: Theme) => createStyles({
	page: {
		transition: theme.transitions.create(["transform, opacity"], {
			easing: theme.transitions.easing.easeIn,
			duration: "200ms"
		})
	}
});

export interface RouterProps {
	onThemeChage?: () => void;
}

class PageRouter extends React.Component<RouterProps & WithStyles<typeof styles>> {

	render() {
		const { classes } = this.props;

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Page onThemeChange={this.props.onThemeChage} className={classes.page}>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="*" component={Error404} />
					</Switch>
				</Page>
			</Router>
		);
	}
}

export default withStyles(styles)(PageRouter);