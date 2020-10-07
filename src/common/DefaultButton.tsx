import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export interface DefaultButtonProps {
	onClick?: React.MouseEventHandler,
	variant?: "text" | "outlined" | "contained",
	color?: "inherit" | "primary" | "secondary" | "default",
	href?: string,
	margin?: "right" | "left" | "both" | "none" | null,
	to?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = props => {
	const button = (
		<Button variant={props.variant || "contained"} color={props.color || "secondary"} onClick={props.onClick} href={props.href}>
			{props.children}
		</Button>
	);
	return (
		<Box 
			mr={!props.margin || ["right", "both"].includes(props.margin) ? 2 : 0} 
			ml={props.margin && ["left", "both"].includes(props.margin) ? 2 : 0}
			marginY={1}
			display="inline-block"
		>
			{
				props.to ? 
				<Link to={props.to} style={{textDecoration: "none"}}>
					{button}
				</Link>
				:
				button
			}
		</Box>
	);
};

export default DefaultButton;