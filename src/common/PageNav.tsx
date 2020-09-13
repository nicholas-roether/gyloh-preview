import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import SideNav from "./SideNav";

export default class PageNav extends React.Component<{open: boolean, onClose: (e: React.MouseEvent) => void}> {
	render() {
		return (
			<SideNav
				open={this.props.open}
				onClose={this.props.onClose}
				header={<img src="logo.png" width={SideNav.DRAWER_WIDTH * 0.9} alt="Gyloh"></img>}
			>
				<ListItem>
					<ListItemText>Test</ListItemText>
				</ListItem>
			</SideNav>
		);
	}
}