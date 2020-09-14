import {  createStyles, Drawer, IconButton, List, SwipeableDrawer, WithStyles, withStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { MouseEventListener } from "../util";

export const DRAWER_WIDTH = 240;

interface SideNavProps extends WithStyles<typeof styles> {
	open: boolean,
	onOpen: MouseEventListener,
	onClose: MouseEventListener,
	swipeable?: boolean
}

class SideNav extends React.Component<SideNavProps> {
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

		if(this.props.swipeable) {
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