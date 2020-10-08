import { Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";
import DefaultButton from "../common/DefaultButton";
import { classesIf } from "../util";

const useStyles = makeStyles(theme => ({
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	fillVertical: {
		height: "100%"
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundSize: "contain"
	}
}));


export interface PartnerCardProps {
	name: string,
	image?: string,
	infoUrl?: string,
	fillVertical?: boolean
}

const PartnerCard: React.FC<PartnerCardProps> = props => {
	const classes = useStyles();
	return (
		<Card variant="outlined" className={classesIf(
			classes.card,
			[classes.fillVertical, props.fillVertical !== false]
		)}>
			<div>
				<CardHeader title={props.name} />
				{ props.image &&
					<CardMedia
						className={classes.media}
						image={props.image}
						title={`${props.name} Logo`}
					/>
				}
				<CardContent>
					{props.children}
				</CardContent>
			</div>
			{ props.infoUrl &&
				<CardActions>
					<DefaultButton variant="text" href={props.infoUrl}>Mehr Info</DefaultButton>
				</CardActions>
			}
		</Card>
	);
}

export default PartnerCard;