import { Box, createStyles, IconButton, InputBase, Theme, withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { classesIf } from "../util";

const styles = (theme: Theme) => createStyles({
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
});

interface SearchState {
	open: boolean
}

type SearchProps = WithStyles<typeof styles>;

class Search extends React.Component<SearchProps, SearchState> {
	ref: React.RefObject<HTMLElement>;
	state = {open: false};

	constructor(props: SearchProps) {
		super(props);
		this.ref = React.createRef();
	}

	private toggle(evt: React.MouseEvent) {
		this.setState(prev => ({open: !prev.open}));
	}

	private putCursor(elem: HTMLElement) {
		let input = elem.querySelector("input");
		if(!input) return;
		input.focus();
	}

	componentDidUpdate() {
		if(!(this.ref.current instanceof HTMLElement)) return;
		if(this.state.open)
			this.putCursor(this.ref.current);
	}

	render() {
		const { classes } = this.props;
		return (
			<Box position="relative">
				<span className={classesIf(
					classes.searchBg,
					[classes.searchBgActive, this.state.open]
				)} ref={this.ref} key="search">
					<InputBase placeholder={"Suchen..."} className={classesIf(
						classes.searchField,
						[classes.searchFieldActive, this.state.open],
					)} />
				</span>
				<IconButton color="inherit" onClick={(e) => this.toggle(e)}><SearchIcon /></IconButton>
			</Box>
		);
	}
}

export default withStyles(styles)(Search);