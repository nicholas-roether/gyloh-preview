import {  createStyles, Drawer, IconButton, List, SwipeableDrawer, WithStyles, withStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import theme from "../theme";

export const DRAWER_WIDTH = 240;

export interface SideNavProps {
	open: boolean,
	onOpen: MouseEventHandler,
	onClose: MouseEventHandler,
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
		const DrawerNav = styled.div`
			position: sticky;
			top: 0;
			z-index: 1;
			border-bottom: 1px ${theme.palette.divider} solid;
			background: ${theme.palette.background.paper};
			display: flex;
			align-items: center;
			justify-content: ${theme.direction === "ltr" ? "flex-end" : "flex-start"};
		`;

		let nav = (
			<DrawerNav className={this.props.classes.toolbarMixin}>
				<IconButton onClick={this.props.onClose}>
					{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</DrawerNav>
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

const styles = createStyles({
	drawerPaper: {
		maxWidth: DRAWER_WIDTH,
		width: "100vw",
	},
	toolbarMixin: {
		...theme.mixins.toolbar
	}
});

export const SideNavHeader = styled.div`
		display: flex;
		margin: ${theme.spacing(4, 0, 2)};
		flex-direction: column;
		align-items: center;
		justify-content: center;
`;

export const SideNavList = List;

export default withStyles(styles)(SideNav)