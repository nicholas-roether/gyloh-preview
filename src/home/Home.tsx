import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import DefaultButton from "../common/DefaultButton";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Section from "../common/Section";
import NewsDisplay from "./NewsDisplay";
import PartnerDisplay from "./PartnerDisplay";
import Star from "./Star";

const useStyles = makeStyles((theme: Theme) => ({
	openingWrapper: {
		display: "flex",
		maxWidth: "920px",
		justifyContent: "space-between",
		alignItems: "flex-end",
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column-reverse",
			alignItems: "center",
			textAlign: "center"
		}
	},
	textWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}
}));

const Home: React.FC = props => {
	const classes = useStyles();
	return (
		<div>
			<Section>
				<div className={classes.openingWrapper}>
					<span className={classes.textWrapper}>
						<Heading variant="h3" gutterBottom>Herzlich Willkommen</Heading>
						<Typography variant="subtitle1" style={{
							fontStyle: "italic",
							fontWeight: "lighter"
						}}>"Mit dem Wir zum Ich - fördere dein Wissen und erweitere deinen Horizont!"</Typography>
						<Box mt={3} whiteSpace="nowrap">
							<DefaultButton to="/about">Über Uns</DefaultButton>
							<DefaultButton>Vertretungsplan</DefaultButton>
						</Box>
					</span>
					<Star />
				</div>
			</Section>
			<Section align="left">
				<Heading variant="h4">Covid-19</Heading>
				<Paragraph>
					Das Gymnasium Lohbrügge ergreift Maßnahmen für die Sicherheit unserer Schüler und unserer Angestellten, und die Eindämmung der Covid-19 Epidemie.
				</Paragraph>
				<Paragraph>
					Aktuelle Informationen finden sie <Link to="/news/covid-19">hier</Link>.
				</Paragraph>
			</Section>
			<Section>
				<Heading variant="h4">News</Heading>
				<NewsDisplay />
			</Section>
			<Section>
				<Box textAlign="center">
					{/* Put an image here */}
					<Heading variant="h4">Bleiben Sie auf dem neuesten Stand.</Heading>
					<DefaultButton to="/newsletter">Newsletter beitreten</DefaultButton>
				</Box>
			</Section>
			<Section>
				<Heading variant="h4">Partner und Auszeichnungen</Heading>
				<Box mt={2}>
					<PartnerDisplay />
				</Box>
			</Section>
		</div>
	);
}

export default Home;