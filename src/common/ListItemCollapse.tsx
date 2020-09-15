import React from "react";
import { Collapse, createStyles, List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import styled from "styled-components";
import theme from "../theme";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const styles = createStyles({
	nested: {
		paddingLeft: theme.spacing(8)
	}
});

export const CollapseItem = styled(ListItem)`
	padding-left: ${theme.spacing(8)}px;
`;

export interface ListItemCollapseProps {
	to?: string;
	text: React.ReactElement;
	icon?: React.ReactElement;
}

interface ListItemCollapseState {
	open: boolean;
}

class ListItemCollapse extends React.Component<ListItemCollapseProps & WithStyles<typeof styles>, ListItemCollapseState> {
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

export default withStyles(styles)(ListItemCollapse);