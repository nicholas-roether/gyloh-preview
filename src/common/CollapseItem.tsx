import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import theme from "../theme";
import LinkNavOption, { LinkNavOptionProps } from "./LinkNavOption";

const styles = createStyles({
	nested: {
		paddingLeft: theme.spacing(10)
	}
});

export type CollapseItemProps = Omit<LinkNavOptionProps, "classes">;

class CollapseItem extends React.Component<CollapseItemProps & WithStyles<typeof styles>> {
	render() {
		const { classes, ...other } = this.props;
		return <LinkNavOption classes={{button: classes.nested}} {...other}></LinkNavOption>
	}
}

export default withStyles(styles)(CollapseItem);