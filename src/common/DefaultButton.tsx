import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export interface DefaultButtonProps {
	onClick?: React.MouseEventHandler,
	href?: string,
	margin?: "right" | "left" | "both" | "none" | null,
	to?: string;
}

export default class DefaultButton extends React.Component<DefaultButtonProps> {
	render() {
		const { margin } = this.props;
		return (
			<Box 
				mr={!margin || ["right", "both"].includes(margin) ? 2 : 0} 
				ml={margin && ["left", "both"].includes(margin) ? 2 : 0}
				marginY={1}
				display="inline-block"
			>
				{
					this.props.to ? 
					<Link to={this.props.to}>
						<Button variant="contained" color="secondary">
							{this.props.children}
						</Button>
					</Link>
					:
					<Button variant="contained" color="secondary" onClick={this.props.onClick} href={this.props.href}>
						{this.props.children}
					</Button>
				}
			</Box>
		);
	}
}