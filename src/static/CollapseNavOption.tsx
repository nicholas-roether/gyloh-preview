import React from "react";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export interface CollapseNavOptionProps {
	text: React.ReactElement | string;
	icon?: React.ReactElement | string | null;
}

const CollapseNavOption: React.FC<CollapseNavOptionProps> = props => {
	const [open, setOpen] = React.useState<boolean>(false);
	const onClick = () => setOpen(prev => !prev);
	return (
		<li>
			<ListItem button onClick={() => onClick()}>
				<ListItemIcon>{props.icon}</ListItemIcon>
				<ListItemText>{props.text}</ListItemText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open}>
				<List disablePadding>
					{props.children}
				</List>
			</Collapse>
		</li>
	);
}

export default CollapseNavOption;