import React from "react";
import { Collapse, createStyles, List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import theme from "../theme";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const styles = createStyles({
	nested: {
		paddingLeft: theme.spacing(8)
	}
});

export interface CollapseNavOptionProps {
	to?: string;
	text: React.ReactElement;
	icon?: React.ReactElement | null;
}

interface ListItemCollapseState {
	open: boolean;
}

class CollapseNavOption extends React.Component<CollapseNavOptionProps & WithStyles<typeof styles>, ListItemCollapseState> {
	state = {open: false};

	private onClick() {
		this.setState(prev => ({open: !prev.open}))
	}

	render() {
		return (
			<span>
				<ListItem button component={this.props.to ? RouterLink : "span"} to={this.props.to} onClick={() => this.onClick()}>
					{this.props.icon}
					{this.props.text}
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open}>
					<List disablePadding>
						{/* TODO fix padding */}
						{this.props.children}
					</List>
				</Collapse>
			</span>
		);
	}
}

export default withStyles(styles)(CollapseNavOption);