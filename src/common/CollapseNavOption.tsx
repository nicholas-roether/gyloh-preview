import React from "react";
import { Collapse, createStyles, List, ListItem, ListItemIcon, ListItemText, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const styles = (theme: Theme) => createStyles({
	nested: {
		paddingLeft: theme.spacing(8)
	}
});

export interface CollapseNavOptionProps {
	to?: string;
	text: React.ReactElement | string;
	icon?: React.ReactElement | string | null;
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
			<li>
				<ListItem button component={this.props.to ? RouterLink : "span"} to={this.props.to} onClick={() => this.onClick()}>
					<ListItemIcon>{this.props.icon}</ListItemIcon>
					<ListItemText>{this.props.text}</ListItemText>
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open}>
					<List disablePadding>
						{this.props.children}
					</List>
				</Collapse>
			</li>
		);
	}
}

export default withStyles(styles)(CollapseNavOption);