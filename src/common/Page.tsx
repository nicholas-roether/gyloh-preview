import { Box, createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import theme from "../theme";
import { classesIf } from "../util";
import PageBar from "./PageBar";
import PageNav from "./PageNav";
import { DRAWER_WIDTH } from "./SideNav";

const styles = createStyles({
	bar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.leavingScreen,
		})
	},
	barOpen: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: theme.direction === "ltr" ? DRAWER_WIDTH : 0,
			marginRight: theme.direction === "ltr" ? 0 : DRAWER_WIDTH,
		}
	},
	contentWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center"
	},
	content: {
		// width: "100vw",
		flexGrow: 1,
		maxWidth: "1000px",
		transition: theme.transitions.create(['margin'], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.leavingScreen,
		})
	},
	contentOpen: {
		transition: theme.transitions.create(['margin'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("md")]: {
			marginLeft: theme.direction === "ltr" ? DRAWER_WIDTH : 0,
			marginRight: theme.direction === "ltr" ? 0 : DRAWER_WIDTH,
		}
	}
});

type PageProps = WithStyles<typeof styles>;
interface PageState {
	navOpen: boolean,
	swipeable: boolean
}

class Page extends React.Component<PageProps, PageState> {
	state = {navOpen: false, swipeable: false};

	constructor(props: PageProps) {
		super(props);
		window.addEventListener("resize", () => this.refreshNavState());
		window.addEventListener("load", () => this.refreshNavState());
	}

	private refreshNavState() {
		if((window.innerWidth > theme.breakpoints.values.md) === this.state.swipeable)
				this.setState(lastState => ({swipeable: !lastState.swipeable}));
	}

	private openNav() {
		this.setState({navOpen: true});
	}

	private closeNav() {
		this.setState({navOpen: false});
	}

	render() {
		let { classes } = this.props; 

		return (
			<div className="page">
				<PageBar onOpenMenu={() => this.openNav()} className={classesIf(
					classes.bar,
					[classes.barOpen, this.state.navOpen]
				)} />
				<PageNav open={this.state.navOpen} onOpen={() => this.openNav()} onClose={() => this.closeNav()} swipeable={this.state.swipeable} />
				<div className={classes.contentWrapper}>
					<Box className={classesIf(
						classes.content,
						[classes.contentOpen, this.state.navOpen]
					)} pl={3} pr={3}>
						{this.props.children}
					</Box>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Page);