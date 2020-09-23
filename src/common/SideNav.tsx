import {  createStyles, Drawer, IconButton, SwipeableDrawer, Theme, WithStyles, withStyles, withTheme, WithTheme, withWidth, WithWidth } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";

export const DRAWER_WIDTH = 240;

const styles = (theme: Theme) => createStyles({
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

class SideNav extends React.Component<SideNavProps & WithStyles<typeof styles> & WithWidth & WithTheme> {
	render() {
		const { classes, width, theme } = this.props;

		let nav = (
			<div className={classes.drawerNav}>
				<IconButton onClick={this.props.onClose}>
					{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
		)

		if(["sm", "xs"].includes(width)) {
			return (
				<SwipeableDrawer
					anchor="left"
					open={this.props.open}
					classes={{paper: classes.drawerPaper}}
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
				classes={{paper: classes.drawerPaper}}
				onClose={this.props.onClose}
			>
				{nav}
				{this.props.children}
			</Drawer>
		);
	}
}

export default withStyles(styles)(withTheme(withWidth()(SideNav)));