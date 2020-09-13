import {  Divider, Drawer, IconButton, List } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

export default class SideNav extends React.Component<{open: boolean, header?: JSX.Element, onClose: (e: React.MouseEvent) => void}> {
	public static readonly DRAWER_WIDTH = 240;

	render() {
		const DrawerNav = styled.div`
			display: flex;
			align-items: center;
			justify-content: flex-end;
		`;

		const DrawerHeader = styled.div`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		`;

		return (
			<Drawer
				variant="persistent"
				anchor="left"
				open={this.props.open}
			>
				<DrawerNav>
					<IconButton onClick={this.props.onClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerNav>
				<Divider />
				<DrawerHeader>
					{this.props.header}
				</DrawerHeader>
				<Divider />
				<List>
					{this.props.children}
				</List>
			</Drawer>
		);
	}
}