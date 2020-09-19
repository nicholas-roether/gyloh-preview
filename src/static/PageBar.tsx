import { AppBar, createStyles, IconButton, Toolbar, Typography, withStyles, WithStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarIcon from "@material-ui/icons/CalendarToday"
import React from "react";
import theme from "../theme";
import Search from "../common/Search";

export interface PageBarProps {
	onOpenMenu?: React.MouseEventHandler;
	className: string;
}

const styles = createStyles({
	heading: {
		margin: theme.spacing(0, 2)
	},
	titleLong: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "inline"
		}
	},
	titleShort: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "inline"
		},
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	icons: {
		display: "inline-flex",
		flexGrow: 1,
		justifyContent: "flex-end",
		[theme.breakpoints.up("sm")]: {
			flexGrow: 0,
			position: "relative",
			float: "right"
		}
	},
	grow: {
		flexGrow: 1
	}
});

class PageBar extends React.Component<PageBarProps & WithStyles<typeof styles>> {
	render() {
		const { classes } = this.props;

		return (
			<AppBar position="sticky" className={this.props.className}>
				<Toolbar>
					<IconButton color="inherit" onClick={this.props.onOpenMenu}><MenuIcon /></IconButton>
					<span className={classes.heading}>
						<Typography className={classes.titleLong} variant="h5">Gymnasium Lohbrügge</Typography>
						<Typography className={classes.titleShort} variant="h5">Gyloh</Typography>
					</span>
					<span className={classes.grow} />
					<span className={classes.icons}>
						<Search />
						<IconButton color="inherit" aria-label="Kalender ansehen"><CalendarIcon /></IconButton>
					</span>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(PageBar);