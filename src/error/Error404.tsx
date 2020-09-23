import { Box, Typography } from "@material-ui/core";
import React from "react";
import DefaultButton from "../common/DefaultButton";
import Error from "./Error";

export interface Error404Props {
	location: Location
}

export default class Error404 extends React.Component<Error404Props> {
	render() {
		return (
			<Error
				code={404}
				description={`Die Seite "${this.props.location.pathname}" konnte nicht gefunden werden`}
			>
				<Typography gutterBottom={true}>
					Überprüfen sie, ob sie einen Schreibfehler gemacht haben, oder probieren sie es später noch einmal.
					Wenn sie glauben, dass es sich hierbei um einen Fehler handelt, kontaktieren sie unseren Support.
				</Typography>
				<Box mt={2}>
					<DefaultButton to="/">
						Zurück zur Homepage
					</DefaultButton>
					<DefaultButton to="/support">
						Support kontaktieren
					</DefaultButton>
				</Box>
			</Error>
		)
	}
}