import { LinkProps, ListItem,} from "@material-ui/core";
import React from "react";

export interface ExternalNavOptionProps extends Omit<LinkProps, "ref"> {
	to: string;
}

export default class ExternalNavOption extends React.Component<ExternalNavOptionProps> {
	private redirect() {
		window.location.href = this.props.to;
	}

	render() {
		const { to, ...other } = this.props;
		return (
			<ListItem button component="li" onClick={() => this.redirect()} {...other}>
				{this.props.children}
			</ListItem>
		);
	}
}