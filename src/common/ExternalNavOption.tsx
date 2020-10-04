import { LinkProps, ListItem,} from "@material-ui/core";
import React from "react";

interface ExternalNavOptionProps extends Omit<LinkProps, "ref"> {
	to: string;
}

const ExternalNavOption: React.FC<ExternalNavOptionProps> = props => {
	const { to, ...other } = props;
	const redirect = () => window.location.href = to;
	return (
		<li>
			<ListItem button onClick={() => redirect()} {...other}>
				{props.children}
			</ListItem>
		</li>
	); 
};

export type {
	ExternalNavOptionProps
}

export default ExternalNavOption;