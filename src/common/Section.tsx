import { Divider, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { classesIf } from "../util";

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.up("sm")]: {
			paddingBottom: theme.spacing(10)
		}
	},
	wrapperLeft: {
		textAlign: "left",
		[theme.breakpoints.up("sm")]: {
			marginRight: "20%"
		}
	},
	wrapperRight: {
		textAlign: "right",
		[theme.breakpoints.up("sm")]: {
			marginLeft: "20%"
		}
	},
	contentWrapper: {
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			paddingBottom: theme.spacing(8)
		}
	}
}));

export interface SectionProps {
	align?: "left" | "right" | "full"
}

const Section: React.FC<SectionProps> = props => {
	const classes = useStyles();
	const align = props.align || "full";
	return (
		<div className={classes.wrapper}>
			<div  className={classesIf(
				classes.contentWrapper,
				[classes.wrapperLeft, align === "left"],
				[classes.wrapperRight, align === "right"]
			)}>
				{props.children}
			</div>
			<Divider />
		</div>
	);
}

export default Section;