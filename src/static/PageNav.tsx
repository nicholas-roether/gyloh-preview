import { Box, Divider, ListItemIcon, ListItemText, createStyles, WithStyles, withStyles, List } from "@material-ui/core";
import * as icons from "@material-ui/icons";
import React from "react";
import EduportLaunchpad from "./EduportLaunchpad";
import CollapseNavOption from "../common/CollapseNavOption";
import LinkNavOption from "../common/LinkNavOption";
import SideNav from "../common/SideNav";
import CollapseItem from "../common/CollapseItem";
import { nav as navStructure } from "../structure/navigation.json";
import { mapFrom } from "../util";
import ExternalNavOption from "../common/ExternalNavOption";
import theme from "../theme";
import { Link } from "react-router-dom";

const styles = createStyles({
	navHeader: {
		margin: theme.spacing(4, 0, 2),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
});


// TODO export json logic
export interface PageNavProps {
	open: boolean;
	onOpen: React.MouseEventHandler;
	onClose: React.MouseEventHandler
}

interface CollapseItemOption {
	to: string,
	text: string,
}
function isCollapseItemOption(object: any): object is CollapseItemOption {
	return (
		"to" in object &&
		"text" in object
	);
}

interface LinkOption {
	to: string,
	text: string,
	icon?: string
}
function isLinkOption(object: any): object is LinkOption {
	return isCollapseItemOption(object);
}

interface CollapseOption {
	to?: string,
	text: string,
	icon?: string,
	collapse: CollapseItemOption[]
}
function isCollapseOption(object: any): object is CollapseOption {
	return (
		"text" in object &&
		"collapse" in object
	)
}

interface ExternalOption {
	text: string,
	icon?: string,
	external: string
}
function isExternalOption(object: any): object is ExternalOption {
	return (
		"text" in object &&
		"external" in object
	)
}

type NavItem = LinkOption | CollapseOption | ExternalOption;

class PageNav extends React.Component<PageNavProps & WithStyles<typeof styles>> {
	private createIcon(name: string): React.ReactElement | null {
		let iconMap = mapFrom(icons);
		return React.createElement(iconMap.get(name), {key: `Icon-${name}`});
	}

	private createListItemLink(data: LinkOption, key: string): React.ReactElement {
		return (
			<LinkNavOption to={data.to} key={key}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText primary={data.text} />
			</LinkNavOption>
		);
	}
	
	private createCollapseItem(data: CollapseItemOption, key: string): React.ReactElement {
		return (
			<CollapseItem to={data.to} key={key}>
				<ListItemText primary={data.text} />
			</CollapseItem>
		);
	}

	private createListItemCollapse(data: CollapseOption, key: string): React.ReactElement {
		return (
			<CollapseNavOption 
				to={data.to} 
				text={<ListItemText>{data.text}</ListItemText>}
				icon={data.icon ? <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon> : null}
				key={key}
			>
				{data.collapse.map((e, i) => this.createCollapseItem(e, i.toString()))}
			</CollapseNavOption>
		);
	}

	private createListItemExternal(data: ExternalOption, key: string): React.ReactElement {
		return (
			<ExternalNavOption to={data.external} key={key}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText>{data.text}</ListItemText>
			</ExternalNavOption>
		);
	}

	private renderStructure(data: NavItem[]): React.ReactElement[] {
		let elements: React.ReactElement[] = [];
		data.forEach((navItem, i) => {
			if(isCollapseOption(navItem)) {
				elements.push(this.createListItemCollapse(navItem, i.toString()));
			}
			else if(isExternalOption(navItem)) {
				elements.push(this.createListItemExternal(navItem, i.toString()));
			}
			else if(isLinkOption(navItem)) {
				elements.push(this.createListItemLink(navItem, i.toString()));
			}
		});
		return elements;
	}

	render() {
		const { classes } = this.props;
		return (
			<SideNav
				open={this.props.open}
				onOpen={this.props.onOpen}
				onClose={this.props.onClose}
			>
				<Link to="/" className={classes.navHeader}>
					<img src="logo.png" width="70%" alt="Gyloh" />
				</Link>
				<List>
					{this.renderStructure(navStructure)}
				</List>
				<Box mb={3} />
				<Divider />
				<Box pt={3} pb={3}>
					<EduportLaunchpad />
 				</Box>
			</SideNav>
		);
	}
}

export default withStyles(styles)(PageNav)