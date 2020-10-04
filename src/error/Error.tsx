import { Box, Typography } from "@material-ui/core";
import React from "react";

export interface ErrorProps {
	code: number,
	description?: string
}

const Error: React.FC<ErrorProps> = props => (
	<Box textAlign="center" display="flex" flexDirection="column" height="100%" alignItems="center" pt={10}>
		<Typography variant="h2" gutterBottom={true}>Error {props.code}</Typography>
		<Typography variant="h4">{props.description}</Typography>
		<Box pb={6} />
		<Box maxWidth="500px">
			{props.children}
		</Box>
	</Box>
)

export default Error