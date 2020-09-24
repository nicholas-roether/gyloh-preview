import { AppBar, createStyles, IconButton, Theme, Toolbar, Typography, withStyles, WithStyles, withTheme, WithTheme } from "@material-ui/core";
import { Menu as MenuIcon, Brightness2 as DarkThemeIcon, Brightness7 as LightThemeIcon, CalendarToday as CalendarIcon } from "@material-ui/icons/";
import React from "react";
import Search from "../common/Search";


const styles = (theme: Theme) => createStyles({
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
		display: "inline",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	icons: {
		position: "relative",
		display: "inline-flex",
		flexGrow: 1,
		justifyContent: "flex-end",
		right: 0,
		top: 0
	},
	grow: {
		flexGrow: 1
	},
});

export interface PageBarProps {
	onOpenMenu?: React.MouseEventHandler;
	onThemeChange?: () => void;
	className: string;
}

class PageBar extends React.Component<PageBarProps & WithStyles<typeof styles> & WithTheme> {
	render() {
		const { classes, theme } = this.props;

		return (
			<AppBar position="sticky" className={this.props.className}>
				<Toolbar>
					<IconButton color="inherit" onClick={this.props.onOpenMenu}><MenuIcon /></IconButton>
					<span className={classes.heading}>
						<Typography className={classes.titleLong} variant="h5">Gymnasium Lohbrügge</Typography>
						<Typography className={classes.titleShort} variant="h5">Gyloh</Typography>
					</span>
					{/* <span className={classes.grow} /> */}
					<span className={classes.icons}>
						<span>
							<Search />
						</span>
						<IconButton color="inherit" aria-label="Theme ändern" onClick={this.props.onThemeChange}>
							{
								theme.palette.type === "light" ?
								<LightThemeIcon />
								:
								<DarkThemeIcon />
							}
						</IconButton>
						<IconButton color="inherit" aria-label="Kalender ansehen"><CalendarIcon /></IconButton>
					</span>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(withTheme(PageBar));