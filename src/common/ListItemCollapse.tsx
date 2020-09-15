import React from "react";
import { Collapse, List, ListItem } from "@material-ui/core";
import styled from "styled-components";
import theme from "../theme";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export interface ListItemCollapseProps {
	to?: string;
	text: React.ReactElement;
	icon?: React.ReactElement;
}

export interface ListItemCollapseState {
	open: boolean;
}

export default class ListItemCollapse extends React.Component<ListItemCollapseProps, ListItemCollapseState> {
	state = {open: false};

	private onClick() {
		this.setState(prev => ({open: !prev.open}))
	}

	render() {
		const CollapseListItem = styled.li`
			padding-left: ${theme.spacing(8)}px;
		`;

		return (
			<span>
				<ListItem button component={this.props.to ? RouterLink : "span"} to={this.props.to} onClick={() => this.onClick()}>
					{this.props.icon}
					{this.props.text}
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open}>
					<List disablePadding>
						{React.Children.map(this.props.children, e => <CollapseListItem>{e}</CollapseListItem>)}
					</List>
				</Collapse>
			</span>
		);
	}
}