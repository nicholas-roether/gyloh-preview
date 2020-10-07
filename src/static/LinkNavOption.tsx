import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LinkProps, ListItem, } from "@material-ui/core";

export interface LinkNavOptionProps extends Omit<LinkProps, "ref"> {
	to: string,
}

const LinkNavOption: React.FC<LinkNavOptionProps> = props => {
	const { to, ...other } = props;
	return (
		<li>
			<ListItem button component={RouterLink} to={to} {...other}>
				{props.children}
			</ListItem>
		</li>
	);
}

export default LinkNavOption;