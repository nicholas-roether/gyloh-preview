import { Box, createStyles, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import DefaultButton from "../common/DefaultButton";
import Section from "../common/Section";
import SlideIn from "../common/SlideIn";
import theme from "../theme";
import NewsCard from "./NewsCard";
import NewsDisplay from "./NewsDisplay";
import Star from "./Star";

const styles = createStyles({
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
						<NewsDisplay>
							<NewsCard heading="Schülerin verreckt elendig in Minecraft" more="#">
								Eine Schülerin der Klasse 7e wurde gestern gegen 20:21 Uhr absolut krank von einem weiteren Schüler in Minecraft Skywars weggerekt.
							</NewsCard>
							<NewsCard heading="Aufnahmeritual der Fünftklässler" more="#">
								Am 17.09 fand endlich die traditionelle Opfergabenzeremonie der neuen fünften Klassen statt. Die Kinder schlugen sich alle
								ziemlich gut in dem zeremoniellen blutigen Todeskampf, Zehn wurden schwer verletzt und es gab sogar drei Tote! Schlussendlich
								fand die Jungfrauopferung statt - Man konnte die Schreie von Lena aus der 5b viele Kilometer weit hören!
							</NewsCard>
							<NewsCard heading="日本語書ければどうなるの" more="#">
								これはただのテストだ。このサイトで日本語はどう見えるのが知りたい。
							</NewsCard>
							<NewsCard heading="pingeon exxist t ??/?" more="#">
								Wap wap wappu wap
							</NewsCard>
						</NewsDisplay>
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