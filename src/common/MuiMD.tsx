import { makeStyles, useTheme } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import React from "react";
import DefaultButton from "./DefaultButton";

const useStyles = makeStyles(theme => ({
	heading: {
		fontFamily: theme.typography.h1.fontFamily,
		fontWeight: "normal"
	}
}));

const Heading: React.FC<{num: number}> = ({ num, children }) => {
	const classes = useStyles();
	const theme = useTheme();
	return React.createElement(`h${num}`, {
		className: classes.heading,
		style: {
			marginTop: theme.spacing(7 - num)
		},
		children
	})
}

function MuiMD(props: {children: string, overrides?: any}) {
	return (
		<Markdown options={{
			overrides: {
				h1: ({children}) => <Heading num={1}>{children}</Heading>,
				h2: ({children}) => <Heading num={2}>{children}</Heading>,
				h3: ({children}) => <Heading num={3}>{children}</Heading>,
				h4: ({children}) => <Heading num={4}>{children}</Heading>,
				h5: ({children}) => <Heading num={5}>{children}</Heading>,
				h6: ({children}) => <Heading num={6}>{children}</Heading>,
				button: ({children}) => <DefaultButton>{children}</DefaultButton>,
				...props.overrides
			}
		}} {...props}>
			{props.children}
		</Markdown>
	);
}

export default MuiMD;