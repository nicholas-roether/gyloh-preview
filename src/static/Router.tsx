import { createStyles, Fade, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import Page from "./Page";
import * as History from "history"

const styles = (theme: Theme) => createStyles({
	page: {
		transition: theme.transitions.create(["transform, opacity"], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.enteringScreen
		})
	}
});

export interface RouterProps {
	onThemeChage?: () => void;
}

interface RouterState {
	location: Location,
	initial: boolean
}

class PageRouter extends React.Component<RouterProps & WithStyles<typeof styles>, RouterState> {
	state = {location: window.location, initial: true}
	private in = false;

	private onExited() {
		this.setState({location: window.location, initial: false})
	}

	render() {
		const { classes } = this.props;

		const transitionStyles = {
			entering: {
				opacity: 0,
				transform: "scale(0.8)"
			},
			entered: {
				opacity: 1,
				transform: "none"
			},
			exiting: {
				opacity: 1,
				transform: "none"
			},
			exited: {
				opacity: 0,
				transform: "scale(0.8)"
			},
			unmounted: {}
		}

		this.in = !this.in;

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<CSSTransition in={this.in} appear={!this.state.initial} timeout={0} onExited={() => this.onExited()}>
					{state => (
						<Page onThemeChange={this.props.onThemeChage} className={classes.page} style={transitionStyles[state]}>
							<Switch location={History.createLocation(this.state.location)}>
								<Route path="/" exact>
									<Home />
								</Route>
								<Route path="*" component={Error404} />
							</Switch>
						</Page>
					)}
				</CSSTransition>
			</Router>
		);
	}
}

export default withStyles(styles)(PageRouter);