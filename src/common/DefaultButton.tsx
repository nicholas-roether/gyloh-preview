import { Box, Button, ButtonProps } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export interface DefaultButtonProps extends ButtonProps {
	margin?: "right" | "left" | "both" | "none",
	to?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = props => {
	const { margin, to, children, ...other } = props;
	const button = (
		<Button variant="contained" color="secondary" {...other}>
			{children}
		</Button>
	);
	return (
		<Box 
			mr={!margin || ["right", "both"].includes(margin) ? 2 : 0} 
			ml={margin && ["left", "both"].includes(margin) ? 2 : 0}
			marginY={1}
			display="inline-block"
		>
			{
				to ? 
				<Link to={to} style={{textDecoration: "none"}}>
					{button}
				</Link>
				:
				button
			}
		</Box>
	);
};

export default DefaultButton;