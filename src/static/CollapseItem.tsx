import { ListItemText, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import LinkNavOption, { LinkNavOptionProps } from "./LinkNavOption";

const useStyles = makeStyles((theme: Theme) => ({
	nested: {
		paddingLeft: theme.spacing(9)
	}
}));

export type CollapseItemProps = Omit<LinkNavOptionProps, "classes">;

const CollapseItem: React.FC<CollapseItemProps> = props => {
	const classes = useStyles();
	const { children, ...other } = props;
	return (
		<LinkNavOption classes={{button: classes.nested}} {...other}>
			<ListItemText primary={children} />
		</LinkNavOption>
	);
}

export default CollapseItem;