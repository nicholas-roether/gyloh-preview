import { createStyles, IconButton, InputBase, withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import theme from "../theme";
import { classesIf } from "../util";

const styles = createStyles({
	searchBg: {
		display: "inline-flex",
		justifyContent: "flex-end",
		background: "transparent",
		verticalAlign: "baseline",
		borderRadius: theme.shape.borderRadius,
		flexGrow: 1,
		maxWidth: "400px",
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
		textOverflow: "ellipsis",
		transition: theme.transitions.create(["width", "padding"], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.shortest
		})
	},
	searchFieldActive: {
		width: "100%",
		paddingLeft: theme.spacing(2),
	}
});

interface SearchState {
	open: boolean
}

// TODO fix transitions
class Search extends React.Component<WithStyles<typeof styles>, SearchState> {
	ref: React.RefObject<HTMLElement>;
	state = {open: false};

	constructor(props: WithStyles<typeof styles>) {
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
		let { classes } = this.props;
		return (
			<span className={classesIf(
				classes.searchBg,
				[classes.searchBgActive, this.state.open]
			)} ref={this.ref} key="search">
				<InputBase placeholder="Seite Durchsuchen..." className={classesIf(
					classes.searchField,
					[classes.searchFieldActive, this.state.open],
				)} />
				<IconButton color="inherit" onClick={(e) => this.toggle(e)}><SearchIcon /></IconButton>
			</span>
		);
	}
}

export default withStyles(styles)(Search);