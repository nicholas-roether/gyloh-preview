import { Box, Divider, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import * as icons from "@material-ui/icons";
import React from "react";
import EduportLaunchpad from "./EduportLaunchpad";
import ListItemCollapse from "../common/ListItemCollapse";
import ListItemLink from "../common/ListItemLink";
import SideNav, { SideNavHeader, SideNavList } from "../common/SideNav";
import CollapseItem from "../common/CollapseItem";
import { nav as navStructure } from "../structure/navigation.json";
import { mapFrom } from "../util";
import ListItemExternal from "../common/ListItemExternal";


export interface PageNavProps {
	open: boolean;
	onOpen: React.MouseEventHandler;
	onClose: React.MouseEventHandler
}

interface CollapseItemData {
	to: string,
	text: string,
}
function isCollapseItemData(object: any): object is CollapseItemData {
	return (
		"to" in object &&
		"text" in object
	);
}

interface ListItemLinkData {
	to: string,
	text: string,
	icon?: string
}
function isListItemLinkData(object: any): object is ListItemLinkData {
	return isCollapseItemData(object);
}

interface ListItemCollapseData {
	to?: string,
	text: string,
	icon?: string,
	collapse: CollapseItemData[]
}
function isListItemCollapseData(object: any): object is ListItemCollapseData {
	return (
		"text" in object &&
		"collapse" in object
	)
}

interface ListItemExternalData {
	text: string,
	icon?: string,
	external: string
}
function isListItemExternalData(object: any): object is ListItemExternalData {
	return (
		"text" in object &&
		"external" in object
	)
}

type NavItem = ListItemLinkData | ListItemCollapseData | ListItemExternalData;

export default class PageNav extends React.Component<PageNavProps> {
	private createIcon(name: string): React.ReactElement | null {
		let iconMap = mapFrom(icons);
		return React.createElement(iconMap.get(name));
	}

	private createListItemLink(data: ListItemLinkData): React.ReactElement {
		return (
			<ListItemLink to={data.to}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText primary={data.text} />
			</ListItemLink>
		);
	}
	
	private createCollapseItem(data: CollapseItemData): React.ReactElement {
		return (
			<CollapseItem to={data.to}>
				<ListItemText primary={data.text} />
			</CollapseItem>
		);
	}

	private createListItemCollapse(data: ListItemCollapseData): React.ReactElement {
		return (
			<ListItemCollapse 
				to={data.to} 
				text={<ListItemText>{data.text}</ListItemText>}
				icon={data.icon ? <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon> : null}
			>
				{data.collapse.map(e => this.createCollapseItem(e))}
			</ListItemCollapse>
		);
	}

	private createListItemExternal(data: ListItemExternalData): React.ReactElement {
		return (
			<ListItemExternal to={data.external}>
				{data.icon && <ListItemIcon>{this.createIcon(data.icon)}</ListItemIcon>}
				<ListItemText>{data.text}</ListItemText>
			</ListItemExternal>
		);
	}

	private renderStructure(data: NavItem[]): React.ReactElement[] {
		let elements: React.ReactElement[] = [];
		for(let navItem of data) {
			if(isListItemCollapseData(navItem)) {
				elements.push(this.createListItemCollapse(navItem));
			}
			if(isListItemExternalData(navItem)) {
				elements.push(this.createListItemExternal(navItem));
			}
			else if(isListItemLinkData(navItem)) {
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