import { createStyles, IconButton, InputBase, withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import SearchIcon from "@material-ui/icons/Search";
import React, { MouseEventHandler } from "react";
import theme from "../theme";
import { classesIf } from "../util";

const styles = createStyles({
	searchBg: {
		display: "inline-flex",
		justifyContent: "flex-end",
		background: "transparent",
		verticalAlign: "baseline",
		borderRadius: theme.shape.borderRadius,
		transition: theme.transitions.create(["background"], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.shortest
		})
	},
	searchBgActive: {
		background: theme.palette.secondary.main,
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1
		}
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
		[theme.breakpoints.up("sm")]: {
			flexShrink: 1
		}
	}
});


interface SearchProps extends WithStyles<typeof styles> {
	open: boolean,
	onOpen: MouseEventHandler,
	onClose: MouseEventHandler
}

// TODO fix transitions
class Search extends React.Component<SearchProps> {
	ref: React.RefObject<HTMLElement>;

	constructor(props: SearchProps) {
		super(props);
		this.ref = React.createRef();
	}

	private toggle(evt: React.MouseEvent) {
		this.props.open ? this.props.onClose(evt) : this.props.onOpen(evt);
	}

	private putCursor(elem: HTMLElement) {
		let input = elem.querySelector("input");
		if(!input) return;
		input.focus();
	}

	componentDidUpdate() {
		if(!(this.ref.current instanceof HTMLElement)) return;
		if(this.props.open)
			this.putCursor(this.ref.current);
	}

	render() {
		let { classes } = this.props;
		return (
			<span className={classesIf(
				classes.searchBg,
				[classes.searchBgActive, this.props.open],
			)} ref={this.ref}>
				<InputBase placeholder="Seite Durchsuchen..." className={classesIf(
					classes.searchField,
					[classes.searchFieldActive, this.props.open],
				)} />
				<IconButton color="inherit" onClick={(e) => this.toggle(e)}><SearchIcon /></IconButton>
			</span>
		);
	}
}

export default withStyles(styles)(Search);