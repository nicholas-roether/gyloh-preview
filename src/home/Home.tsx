import { Box, createStyles, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import DefaultButton from "../common/DefaultButton";
import Section from "../common/Section";
import SlideIn from "../common/SlideIn";
import NewsDisplay from "./NewsDisplay";
import Star from "./Star";

const styles = (theme: Theme) => createStyles({
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
});

class Home extends React.Component<WithStyles<typeof styles>> {
    render() {
		const { classes } = this.props;

        return (
            <div>
				<Section number={1}>
					<div className={classes.openingWrapper}>
						<span className={classes.textWrapper}>
							<Typography variant="h3" gutterBottom>Herzlich Willkommen</Typography>
							<Typography variant="subtitle1" style={{
								fontStyle: "italic",
								fontWeight: "lighter"
							}}>"Mit dem Wir zum Ich - fördere dein Wissen und erweitere deinen Horizont!"</Typography>
							<SlideIn from="right">
								<Box mt={3} whiteSpace="nowrap">
									<DefaultButton to="/about">Über Uns</DefaultButton>
									<DefaultButton>Vertretungsplan</DefaultButton>
								</Box>
							</SlideIn>
						</span>
						<Star />
					</div>
				</Section>
				<Section number={2}>
                	<Typography variant="h4" gutterBottom={true}>News</Typography>
					<SlideIn from="left">
						<NewsDisplay />
					</SlideIn>
				</Section>
				<Section number={3}>
					<Box textAlign="center">
						{/* Put an image here */}
						<Typography variant="h4">Bleiben Sie auf dem neuesten Stand.</Typography>
						<DefaultButton to="/newsletter">Newsletter beitreten</DefaultButton>
					</Box>
				</Section>
            </div>
        );
    }
}

export default withStyles(styles)(Home);