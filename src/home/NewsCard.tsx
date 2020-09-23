import { Box, Button, Card, CardActions, CardContent, createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
	cardRoot: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	cardContent: {
		margin: theme.spacing(0, 2),
		flexShrink: 1,
		overflow: "hidden"
	},
	news: {
		margin: theme.spacing(0, 1.5),
		width: "100%",
		maxWidth: "320px",
		[theme.breakpoints.up("sm")]: {
			margin: theme.spacing(0, 2),
		}
	},
});

export interface NewsCardProps extends WithStyles<typeof styles> {
	heading?: string,
	more?: string
}

class NewsCard extends React.Component<NewsCardProps> {
	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.news} classes={{root: classes.cardRoot}}>
				<CardContent className={this.props.classes.cardContent}>
					<Box mb={3}>
						<Typography variant="h5">{this.props.heading}</Typography>
					</Box>
					<Typography>{this.props.children}</Typography>
				</CardContent>
				{
					this.props.more &&
					<CardActions>
						<Button color="secondary" style={{margin: "auto"}}>Mehr lesen</Button>
					</CardActions>
				}
			</Card>
		);
	}
}

export default withStyles(styles)(NewsCard);