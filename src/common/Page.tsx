import { Box, createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import theme from "../theme";
import PageBar from "./PageBar";
import PageNav from "./PageNav";
import { DRAWER_WIDTH } from "./SideNav";

const styles = createStyles({
	slideOpen: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: theme.direction === "ltr" ? DRAWER_WIDTH : 0,
		marginRight: theme.direction === "ltr" ? 0 : DRAWER_WIDTH,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
    	}),
	},
	slideClose: {
		width: "100%",
		margin: 0,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
    	}),
	}
});

class Page extends React.Component<WithStyles<typeof styles>> {
	state = {navOpen: false};

	private openNav() {
		this.setState({navOpen: true});
	}

	private closeNav() {
		this.setState({navOpen: false});
	}

	render() {
		let { classes } = this.props; 
		let slideClass = this.state.navOpen ? classes.slideOpen : classes.slideClose;

		return (
			<div className="page">
				<PageBar onOpenMenu={() => this.openNav()} className={slideClass} />
				<PageNav open={this.state.navOpen} onClose={() => this.closeNav()} />
				<Box className={slideClass} pl={3} pr={3}>
					{this.props.children}
				</Box>
			</div>
		);
	}
}

export default withStyles(styles)(Page);