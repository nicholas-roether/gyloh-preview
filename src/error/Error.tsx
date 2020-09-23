import { Box, Typography } from "@material-ui/core";
import React from "react";

export interface ErrorProps {
	code: number,
	description?: string
}

export default class Error extends React.Component<ErrorProps> {
	render() {
		return (
			<Box textAlign="center" display="flex" flexDirection="column" height="100%" alignItems="center" pt={10}>
				<Typography variant="h2" gutterBottom={true}>Error {this.props.code}</Typography>
				<Typography variant="h4">{this.props.description}</Typography>
				<Box pb={6} />
				<Box maxWidth="500px">
					{this.props.children}
				</Box>
			</Box>
		);
	}	
}