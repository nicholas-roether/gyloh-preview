import { createStyles, makeStyles } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import React from "react";

const useStyles = makeStyles(theme => createStyles({
	heading: {
		fontFamily: theme.typography.h1.fontFamily,
		fontWeight: "normal"
	}
}));

function MuiMD(props: {children: string, overrides?: any}) {
	const classes = useStyles();
	return (
		<Markdown options={{createElement: (Tag, props, ...children) => {
			switch(Tag) {
				case "h1":
					return <h1 className={classes.heading}>{children}</h1>;
				case "h2":
					return <h2 className={classes.heading}>{children}</h2>;
				case "h3":
					return <h3 className={classes.heading}>{children}</h3>;
				case "h4":
					return <h4 className={classes.heading}>{children}</h4>;
				case "h5":
					return <h5 className={classes.heading}>{children}</h5>;
				case "h6":
					return <h6 className={classes.heading}>{children}</h6>;
				default:
					return <Tag {...props}>{children}</Tag>
			}
		}, overrides: props.overrides}} {...props}>
			{props.children}
		</Markdown>
	);
}

export default MuiMD;