import { AppBar, IconButton, makeStyles, Theme, Toolbar, Typography, useTheme } from "@material-ui/core";
import { Menu as MenuIcon, Brightness2 as DarkThemeIcon, Brightness7 as LightThemeIcon, CalendarToday as CalendarIcon } from "@material-ui/icons/";
import React from "react";
import Search from "./Search";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

export interface PageBarProps {
	onOpenMenu?: React.MouseEventHandler;
	onThemeChange?: () => void;
	className: string;
}

const PageBar: React.FC<PageBarProps> = props => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<AppBar position="sticky" className={props.className}>
			<Toolbar>
				<IconButton color="inherit" onClick={props.onOpenMenu}><MenuIcon /></IconButton>
				<span className={classes.heading}>
					<Typography className={classes.titleLong} variant="h5">Gymnasium Lohbrügge</Typography>
					<Typography className={classes.titleShort} variant="h5">Gyloh</Typography>
				</span>
				{/* <span className={classes.grow} /> */}
				<span className={classes.icons}>
					<span>
						<Search />
					</span>
					<IconButton color="inherit" aria-label="Theme ändern" onClick={props.onThemeChange}>
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

export default PageBar;