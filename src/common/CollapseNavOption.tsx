import React from "react";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";


export interface CollapseNavOptionProps {
	to?: string;
	text: React.ReactElement | string;
	icon?: React.ReactElement | string | null;
}

interface ListItemCollapseState {
	open: boolean;
}

export default class CollapseNavOption extends React.Component<CollapseNavOptionProps, ListItemCollapseState> {
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