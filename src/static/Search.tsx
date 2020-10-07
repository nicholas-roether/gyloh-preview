import { Box, IconButton, InputBase, makeStyles, Theme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { classesIf } from "../util";

const useStyles = makeStyles((theme: Theme) => ({
	searchBg: {
		display: "inline-flex",
		position: "absolute",
		right: 0,
		width: `calc(100vw - ${theme.spacing(23)}px)`,
		maxWidth: "300px",
		padding: theme.spacing(1, 0),
		justifyContent: "space-between",
		background: "transparent",
		verticalAlign: "baseline",
		borderRadius: theme.shape.borderRadius,
		flexGrow: 1,
		transition: theme.transitions.create(["background"], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.shortest
		})
	},
	searchBgActive: {
		background: theme.palette.secondary.main,
	},
	searchField: {
		width: 0,
		color: theme.palette.primary.contrastText,
		overflow: "hidden",
		textOverflow: "ellipsis",
		transition: theme.transitions.create(["width", "padding"], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.shortest
		})
	},
	searchFieldActive: {
		position: "relative",
		left: 0,
		width: `calc(100% - ${theme.spacing(7)}px)`,
		paddingLeft: theme.spacing(2),
	}
}));

const Search: React.FC = props => {
	const [open, setOpen] = React.useState<boolean>(false);
	const ref = React.useRef(null);
	const toggle: React.MouseEventHandler = e => setOpen(prev => !prev);
	const classes = useStyles();
	return (
		<Box position="relative">
			<span className={classesIf(
				classes.searchBg,
				[classes.searchBgActive, open]
			)} ref={ref} key="search">
				<InputBase placeholder={"Suchen..."} className={classesIf(
					classes.searchField,
					[classes.searchFieldActive, open],
				)} />
			</span>
			<IconButton color="inherit" onClick={(e) => toggle(e)}><SearchIcon /></IconButton>
		</Box>
	);
}

export default Search;