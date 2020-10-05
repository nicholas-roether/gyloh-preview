import { Box } from "@material-ui/core";
import React from "react";

export interface ExternalRedirectProps {
	href: string
}

const ExternalRedirect: React.FC<ExternalRedirectProps> = props => {
	window.location.replace(props.href);
	return (
		<Box marginX="auto">
			Sie werden weitergeleitet...
		</Box>
	)
}

export default ExternalRedirect;