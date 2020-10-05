import { Box, Button, Card, CardActions, CardContent, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
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
	link: {
		textDecoration: "none"
	}
}));

export interface NewsCardProps {
	heading?: string | null,
	more?: string | null
}

const NewsCard: React.FC<NewsCardProps> = props => {
	const classes = useStyles();
	return (
		<Card className={classes.news} classes={{root: classes.cardRoot}}>
			<CardContent className={classes.cardContent}>
				<Box mb={3}>
					<Typography variant="h5">{props.heading}</Typography>
				</Box>
				<Typography component="div">{props.children}</Typography>
			</CardContent>
			{
				props.more &&
				<CardActions>
					<Box display="inline-block" marginX="auto">
						<Link to={props.more} className={classes.link}>
							<Button color="secondary">Mehr lesen</Button>
						</Link>
					</Box>
				</CardActions>
			}
		</Card>
	);
}

export default NewsCard;