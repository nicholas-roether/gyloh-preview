import {  createStyles, Divider, Drawer, IconButton, List, withStyles } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

export const DRAWER_WIDTH = 240;

class SideNav extends React.Component<{
	open: boolean, header?: JSX.Element, 
	onClose: (e: React.MouseEvent) => void,
	classes: Record<"drawerPaper" | "toolbarMixin", string>,
}> {
	render() {
		const DrawerNav = styled.div`
			display: flex;
			align-items: center;
			justify-content: ${theme.direction === "ltr" ? "flex-end" : "flex-start"};
		`;

		const DrawerHeader = styled.div`
			display: flex;
			margin: ${theme.spacing(2, 0)};
			flex-direction: column;
			align-items: center;
			justify-content: center;
		`;

		return (
			<Drawer
				variant="persistent"
				anchor="left"
				open={this.props.open}
				classes={{paper: this.props.classes.drawerPaper}}
			>
				<DrawerNav className={this.props.classes.toolbarMixin}>
					<IconButton onClick={this.props.onClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerNav>
				<Divider />
				<DrawerHeader>
					{this.props.header}
				</DrawerHeader>
				<List>
					{this.props.children}
				</List>
			</Drawer>
		);
	}
}

const styles = createStyles({
	drawerPaper: {
		maxWidth: DRAWER_WIDTH,
		width: "100vw"
	},
	toolbarMixin: {
		...theme.mixins.toolbar
	}
});

export default withStyles(styles)(SideNav);