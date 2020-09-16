import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import theme from "../theme";
import ListItemLink, { ListItemLinkProps } from "./ListItemLink";

const styles = createStyles({
	nested: {
		paddingLeft: theme.spacing(10)
	}
});

export type CollapseItemProps = Omit<ListItemLinkProps, "classes">;

class CollapseItem extends React.Component<CollapseItemProps & WithStyles<typeof styles>> {
	render() {
		const { classes, ...other } = this.props;
		return <ListItemLink classes={{button: classes.nested}} {...other}></ListItemLink>
	}
}

export default withStyles(styles)(CollapseItem);