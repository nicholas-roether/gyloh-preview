import { createStyles, ListItemText, Theme, withStyles, WithStyles, withTheme, WithTheme } from "@material-ui/core";
import React from "react";
import LinkNavOption, { LinkNavOptionProps } from "./LinkNavOption";

const styles = (theme: Theme) => createStyles({
	nested: {
		paddingLeft: theme.spacing(9)
	}
});

export type CollapseItemProps = Omit<LinkNavOptionProps, "classes">;

class CollapseItem extends React.Component<CollapseItemProps & WithStyles<typeof styles> & WithTheme> {
	render() {
		const { classes, children, theme, ...other } = this.props;
		return (
			<LinkNavOption classes={{button: classes.nested}} {...other}>
				<ListItemText primary={children}/>
			</LinkNavOption>
		);
	}
}

export default withStyles(styles)(withTheme(CollapseItem));