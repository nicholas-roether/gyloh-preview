import { Box, Divider, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import * as icons from "@material-ui/icons";
import React from "react";
import EduportLaunchpad from "./EduportLaunchpad";
import CollapseNavOption from "../common/CollapseNavOption";
import LinkNavOption from "../common/LinkNavOption";
import SideNav, { SideNavHeader, SideNavList } from "../common/SideNav";
import CollapseItem from "../common/CollapseItem";
import { nav as navStructure } from "../structure/navigation.json";
import { mapFrom } from "../util";
import ExternalNavOption from "../common/ExternalNavOption";


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

export default class PageNav extends React.Component<PageNavProps> {
	private createIcon(name: string): React.ReactElement | null {
		let iconMap = mapFrom(icons);
		return React.createElement(iconMap.get(name));
	}

	private createListItemLink(data: LinkOption): React.ReactElement {
		return (
			<LinkNavOption to={data.to}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText primary={data.text} />
			</LinkNavOption>
		);
	}
	
	private createCollapseItem(data: CollapseItemOption): React.ReactElement {
		return (
			<CollapseItem to={data.to}>
				<ListItemText primary={data.text} />
			</CollapseItem>
		);
	}

	private createListItemCollapse(data: CollapseOption): React.ReactElement {
		return (
			<CollapseNavOption 
				to={data.to} 
				text={<ListItemText>{data.text}</ListItemText>}
				icon={data.icon ? <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon> : null}
			>
				{data.collapse.map(e => this.createCollapseItem(e))}
			</CollapseNavOption>
		);
	}

	private createListItemExternal(data: ExternalOption): React.ReactElement {
		return (
			<ExternalNavOption to={data.external}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText>{data.text}</ListItemText>
			</ExternalNavOption>
		);
	}

	private renderStructure(data: NavItem[]): React.ReactElement[] {
		let elements: React.ReactElement[] = [];
		for(let navItem of data) {
			if(isCollapseOption(navItem)) {
				elements.push(this.createListItemCollapse(navItem));
			}
			else if(isExternalOption(navItem)) {
				elements.push(this.createListItemExternal(navItem));
			}
			else if(isLinkOption(navItem)) {
				elements.push(this.createListItemLink(navItem));
			}
		}
		return elements;
	}

	render() {
		return (
			<SideNav
				open={this.props.open}
				onOpen={this.props.onOpen}
				onClose={this.props.onClose}
			>
				<SideNavHeader>
					<Button>
						<img src="logo.png" width="70%" alt="Gyloh" />
					</Button>
				</SideNavHeader>
				<SideNavList>
					{this.renderStructure(navStructure)}
				</SideNavList>
				<Box mb={3} />
				<Divider />
				<Box pt={3} pb={3}>
					<EduportLaunchpad />
 				</Box>
			</SideNav>
		);
	}
}