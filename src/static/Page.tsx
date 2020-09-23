import { Box, createStyles, Divider, Theme, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { classesIf } from "../util";
import PageBar from "../static/PageBar";
import { DRAWER_WIDTH } from "../common/SideNav";
import PageNav from "./PageNav";

const styles = (theme: Theme) => createStyles({
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
		transition: theme.transitions.create(['margin'], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.leavingScreen,
		})
	},
	content: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: theme.spacing(0, 1),
		[theme.breakpoints.up("sm")]: {
			padding: theme.spacing(0, 3)
		}
	},
	contentWrapperOpen: {
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

class Page extends React.Component<PageProps> {
	state = {navOpen: false};

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
				<PageNav open={this.state.navOpen} onOpen={() => this.openNav()} onClose={() => this.closeNav()} />
				<Divider />
				<div className={classesIf(
						classes.contentWrapper,
						[classes.contentWrapperOpen, this.state.navOpen]
				)}>
					<Box marginX={4} marginY={1}>

						{/* TODO implement Breadcrumbs
						<Breadcrumbs aria-label="breadcrumbs">
							<Typography color="textPrimary">Home</Typography>
						</Breadcrumbs> */}
					</Box>
					<Box className={classes.content}>
						{this.props.children}
					</Box>			
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Page);