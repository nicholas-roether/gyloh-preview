import { makeStyles } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import React from "react";
import DefaultButton from "./DefaultButton";

const useStyles = makeStyles(theme => ({
	heading: {
		fontFamily: theme.typography.h1.fontFamily,
		fontWeight: "normal"
	}
}));

function MuiMD(props: {children: string, overrides?: any}) {
	const classes = useStyles();
	return (
		<Markdown options={{
			overrides: {
				h1: ({children}) => <h1 className={classes.heading}>{children}</h1>,
				h2: ({children}) => <h2 className={classes.heading}>{children}</h2>,
				h3: ({children}) => <h3 className={classes.heading}>{children}</h3>,
				h4: ({children}) => <h4 className={classes.heading}>{children}</h4>,
				h5: ({children}) => <h5 className={classes.heading}>{children}</h5>,
				h6: ({children}) => <h6 className={classes.heading}>{children}</h6>,
				button: ({children}) => <DefaultButton>{children}</DefaultButton>,
				...props.overrides
			}
		}} {...props}>
			{props.children}
		</Markdown>
	);
}

export default MuiMD;