import React from "react";
import { Collapse, List, ListItemIcon, ListItemText } from "@material-ui/core";
import ListItemLink from "./ListItemLink";
import styled from "styled-components";
import theme from "../theme";

export interface ListItemCollapseProps {
	to: string;
	text: string;
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
		const CollapseList = styled(List)`
			padding-left: ${theme.spacing(4)}px;
		`;

		return (
			<span>
				<ListItemLink open={this.state.open} onClick={() => this.onClick()} to={this.props.to}>
					<ListItemIcon>{this.props.icon}</ListItemIcon>
					<ListItemText primary={this.props.text} />
				</ListItemLink>
				<Collapse component="li" in={this.state.open}>
					<CollapseList disablePadding>
						{this.props.children}
					</CollapseList>
				</Collapse>
			</span>
		);
	}
}