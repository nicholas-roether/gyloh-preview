import {  createStyles, Drawer, IconButton, SwipeableDrawer, WithStyles, withStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";
import theme from "../theme";


export const DRAWER_WIDTH = 240;

const styles = createStyles({
	drawerPaper: {
		maxWidth: DRAWER_WIDTH,
		width: "100vw",
	},
	drawerNav: {
		position: "sticky",
		top: 0,
		zIndex: 1,
		borderBottom: `1px ${theme.palette.divider} solid`,
		background: theme.palette.background.paper,
		display: "flex",
		alignItems: "center",
		justifyContent: theme.direction === "ltr" ? "flex-end" : "flex-start",
		...theme.mixins.toolbar
	}
});

export interface SideNavProps {
	open: boolean,
	onOpen: React.MouseEventHandler,
	onClose: React.MouseEventHandler,
}

type SideNavPropsWithStyles = SideNavProps & WithStyles<typeof styles>;

interface SideNavState {
	swipeable: boolean
}

class SideNav extends React.Component<SideNavPropsWithStyles, SideNavState> {
	state = {swipeable: true}
	private refreshListener: () => void;

	constructor(props: SideNavPropsWithStyles) {
		super(props);
		this.refreshListener = () => this.refreshState();
		window.addEventListener("load", this.refreshListener);
		window.addEventListener("resize", this.refreshListener);
	}

	componentWillUnmount() {
		window.removeEventListener("load", this.refreshListener);
		window.removeEventListener("resize", this.refreshListener);
	}

	private refreshState() {
		if((window.innerWidth > theme.breakpoints.values.md) === this.state.swipeable)
			this.setState(lastState => ({swipeable: !lastState.swipeable}));
	}

	render() {
		let nav = (
			<div className={this.props.classes.drawerNav}>
				<IconButton onClick={this.props.onClose}>
					{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
		)

		if(this.state.swipeable) {
			return (
				<SwipeableDrawer
					anchor="left"
					open={this.props.open}
					classes={{paper: this.props.classes.drawerPaper}}
					onOpen={this.props.onOpen}
					onClose={this.props.onClose}
					keepMounted={true}
				>
					{nav}
					{this.props.children}
				</SwipeableDrawer>
			)
		}

		return (
			<Drawer
				variant="persistent"
				anchor="left"
				open={this.props.open}
				classes={{paper: this.props.classes.drawerPaper}}
				onClose={this.props.onClose}
			>
				{nav}
				{this.props.children}
			</Drawer>
		);
	}
}

export default withStyles(styles)(SideNav)