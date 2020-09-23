import { createStyles, Divider, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => createStyles({
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
})

class Section extends React.Component<WithStyles<typeof styles>> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.wrapper}>
				<div  className={classes.contentWrapper}>{this.props.children}</div>
				<Divider />
			</div>
		);
	}
}

export default withStyles(styles)(Section);