import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LinkProps, ListItem, } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export interface ListItemLinkProps extends Omit<LinkProps, "ref"> {
	to: string,
	open?: boolean
}

export default class ListItemLink extends React.Component<ListItemLinkProps> {
	render() {
		const { to, open, ...other } = this.props;
		return (
			<ListItem button component={RouterLink} to={to} {...other}>
				{this.props.children}
				{open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
			</ListItem>
		);
	}
}