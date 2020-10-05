import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import DefaultButton from "../common/DefaultButton";
import Section from "../common/Section";
import NewsDisplay from "./NewsDisplay";
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
						<Typography variant="h3" gutterBottom>Herzlich Willkommen</Typography>
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
			<Section>
				<Typography variant="h4" gutterBottom={true}>News</Typography>
				<NewsDisplay />
			</Section>
			<Section>
				<Box textAlign="center">
					{/* Put an image here */}
					<Typography variant="h4">Bleiben Sie auf dem neuesten Stand.</Typography>
					<DefaultButton to="/newsletter">Newsletter beitreten</DefaultButton>
				</Box>
			</Section>
		</div>
	);
}

export default Home;