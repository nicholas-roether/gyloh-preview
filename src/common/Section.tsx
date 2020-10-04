import { createStyles, Divider, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => createStyles({
	wrapper: {
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.up("sm")]: {
			paddingBottom: theme.spacing(10)
		}
	},
	contentWrapper: {
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			paddingBottom: theme.spacing(8)
		}
	}
}));

const Section: React.FC = props => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<div  className={classes.contentWrapper}>{props.children}</div>
			<Divider />
		</div>
	);
}

export default Section;