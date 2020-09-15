import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LinkProps, ListItem, } from "@material-ui/core";

export interface ListItemLinkProps extends Omit<LinkProps, "ref"> {
	to: string,
}

export default class ListItemLink extends React.Component<ListItemLinkProps> {
	render() {
		const { to, ...other } = this.props;
		return (
			<ListItem button component={RouterLink} to={to} {...other}>
				{this.props.children}
			</ListItem>
		);
	}
}