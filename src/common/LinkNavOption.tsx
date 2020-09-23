import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LinkProps, ListItem, } from "@material-ui/core";

export interface LinkNavOptionProps extends Omit<LinkProps, "ref"> {
	to: string,
}

export default class LinkNavOption extends React.Component<LinkNavOptionProps> {
	render() {
		const { to, ...other } = this.props;
		return (
			<li>
				<ListItem button component={RouterLink} to={to} {...other}>
					{this.props.children}
				</ListItem>
			</li>
		);
	}
}