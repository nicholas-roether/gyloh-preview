import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export interface DefaultButtonProps {
	onClick?: React.MouseEventHandler,
	href?: string,
	margin?: "right" | "left" | "both" | "none" | null,
	to?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = props => (
	<Box 
		mr={!props.margin || ["right", "both"].includes(props.margin) ? 2 : 0} 
		ml={props.margin && ["left", "both"].includes(props.margin) ? 2 : 0}
		marginY={1}
		display="inline-block"
	>
		{
			props.to ? 
			<Link to={props.to} style={{textDecoration: "none"}}>
				<Button variant="contained" color="secondary">
					{props.children}
				</Button>
			</Link>
			:
			<Button variant="contained" color="secondary" onClick={props.onClick} href={props.href}>
				{props.children}
			</Button>
		}
	</Box>
);

export default DefaultButton;