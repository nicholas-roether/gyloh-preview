import { Drawer, IconButton, makeStyles, SwipeableDrawer, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) => ({
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
	},
	staticDrawerContent: {
		overflow: "hidden",
		paddingRight: "17px",
		height: "100%",
		"&:hover": {
			paddingRight: 0,
			overflowY: "scroll"
		}
	},
	swipeableDrawerContent: {
		overflowX: "hidden",
		overflowY: "scroll",
		height: "100%",
		scrollbarWidth: "thin"
	}
}));

export interface SideNavProps {
	open: boolean,
	onOpen: React.MouseEventHandler,
	onClose: React.MouseEventHandler,
}

const StaticNav: React.FC<SideNavProps> = props => {
	const classes = useStyles();
	return (
		<Drawer
			variant="persistent"
			anchor="left"
			open={props.open}
			classes={{paper: classes.drawerPaper}}
			onClose={props.onClose}
		>
			{props.children}
		</Drawer>
	)
};

const SwipeableNav: React.FC<SideNavProps> = props => {
	const classes = useStyles();
	return (
		<SwipeableDrawer
			anchor="left"
			open={props.open}
			classes={{paper: classes.drawerPaper}}
			onOpen={props.onOpen}
			onClose={props.onClose}
			keepMounted={true}
		>
			{props.children}
		</SwipeableDrawer>
	);
}

const SideNav: React.FC<SideNavProps> = props => {
	const classes = useStyles();
	const theme = useTheme();
	const swipeable = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const NavDrawer = swipeable ? SwipeableNav : StaticNav;
	const { children, ...drawerProps } = props;
	return (
		<NavDrawer {...drawerProps}>
			<div className={classes.drawerNav}>
				<IconButton onClick={props.onClose}>
					{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
			<div className={swipeable ? classes.swipeableDrawerContent : classes.staticDrawerContent}>
				{children}
			</div>
		</NavDrawer>
	);
}

export default SideNav;