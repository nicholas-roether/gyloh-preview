import { createStyles, ListItemIcon, ListItemText, Theme, withStyles, WithStyles, withTheme, WithTheme } from "@material-ui/core";
import { SubdirectoryArrowLeft, SubdirectoryArrowRight } from "@material-ui/icons";
import React from "react";
import LinkNavOption, { LinkNavOptionProps } from "./LinkNavOption";

const styles = (theme: Theme) => createStyles({
	nested: {
		paddingLeft: theme.spacing(3)
	}
});

export type CollapseItemProps = Omit<LinkNavOptionProps, "classes">;

class CollapseItem extends React.Component<CollapseItemProps & WithStyles<typeof styles> & WithTheme> {
	render() {
		const { classes, children, theme, ...other } = this.props;
		return (
			<LinkNavOption classes={{button: classes.nested}} {...other}>
				<ListItemIcon>{theme.direction === "ltr" ? <SubdirectoryArrowRight /> : <SubdirectoryArrowLeft />}</ListItemIcon>
				<ListItemText primary={children}/>
			</LinkNavOption>
		);
	}
}

export default withStyles(styles)(withTheme(CollapseItem));