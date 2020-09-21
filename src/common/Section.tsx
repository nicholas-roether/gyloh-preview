import { createStyles, Divider, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import theme from "../theme";
import SlideIn from "./SlideIn";

const styles = createStyles({
	wrapper: {
		marginBottom: theme.spacing(6),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(10)
		}
	},
	contentWrapper: {
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(8)
		}
	}
})

export interface SectionProps {
	number?: number
}

class Section extends React.Component<SectionProps & WithStyles<typeof styles>> {
	private readonly timeoutFactor = 100;

	render() {
		const { number, classes } = this.props;
		const timeout = number ? (number - 1) * this.timeoutFactor : 0;
		return (
			<div className={classes.wrapper}>
				<SlideIn timeout={timeout}>
					<div  className={classes.contentWrapper}>{this.props.children}</div>
					<Divider />
				</SlideIn>
			</div>
		);
	}
}

export default withStyles(styles)(Section);