import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
	footer: {
		padding: theme.spacing(2, 0),
		background: theme.palette.primary.main,
		// TODO shadow
		color: theme.palette.primary.contrastText
	}
}));

const PageFooter: React.FC = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			test
		</footer>
	);
}
export default PageFooter;