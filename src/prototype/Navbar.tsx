import {Button, MenuItem, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { getHTMLElems } from "../util";
import Dropdown from "../common/Dropdown";

interface NavbarProps {
	minDisplayed?: number;
	maxDisplayed?: number;
	children?: JSX.Element[];
}

export default class Navbar extends React.Component<NavbarProps> {
	private readonly ACTION_GAP = 3;
	private toolbarRef: React.RefObject<HTMLElement>;
	state = {actionsInToolbar: 0, actionWidths: new Array<number>(), overflowDropdownOpen: false}

	constructor(props: NavbarProps) {
		super(props);
		this.toolbarRef = React.createRef();
		this.state.actionsInToolbar = props.children?.length || 0;
		window.addEventListener("resize", () => this.onResize());
		window.addEventListener("load", () => this.onLoad());
	}

	private onLoad() {
		if(!(this.toolbarRef.current instanceof HTMLElement)) return;
		this.buildToolbar(this.toolbarRef.current);
	}

	private buildToolbar(toolbar: HTMLElement) {
		let actions = toolbar.querySelector(".navbar-actions");
		if(!(actions instanceof HTMLElement)) return;
		this.restructureToolbar(toolbar, getHTMLElems(actions.children).map<number>(v => {
			if(v instanceof HTMLElement) return v.offsetWidth;
			return 0;
		}));
	}

	private restructureToolbar(toolbar: HTMLElement, actionWidths: number[]) {
		let actionElem = toolbar.querySelector(".navbar-actions");
		if(!(actionElem instanceof HTMLElement)) return;
		let actionsInToolbar = this.getActionsInToolbar(actionElem.offsetWidth, actionWidths);
		if(actionsInToolbar !== this.state.actionsInToolbar || actionWidths !== this.state.actionWidths)
			this.setState({actionsInToolbar, actionWidths});
	}

	private getActionWidth(actions: number[]) {
		let width =  actions.reduce((a, v) => a + v) + theme.spacing(this.ACTION_GAP) * (actions.length - 1);
		return width;
	}

	private getActionsInToolbar(maxWidth: number, actionWidths: number[]): number {
		let min = this.props.minDisplayed || 0;
		let numActions = actionWidths.length;
		if(this.props.maxDisplayed && numActions > this.props.maxDisplayed) numActions = this.props.maxDisplayed;
		while(this.getActionWidth(actionWidths.slice(0, numActions)) > maxWidth || numActions === min) {
			numActions--;
		}
		return numActions;
	}

	private onResize() {
		let toolbar = this.toolbarRef.current;
		if(!(toolbar instanceof HTMLElement)) return;
		this.restructureToolbar(toolbar, this.state.actionWidths);
	}

	render() {
		const Actions = styled.span`
			margin-left: ${theme.spacing(6)}px;
			width: 50%;
			display: inline-flex;
			gap: ${theme.spacing(this.ACTION_GAP)}px;
		`;
		const Options = styled.span`
			position: relative;
		`;

		var children = React.Children.toArray(this.props.children);
		var actions = children.slice(0, this.state.actionsInToolbar);
		var overflow = children.slice(this.state.actionsInToolbar);
		return (
			<AppBar position="sticky" color="transparent">
				<Toolbar innerRef={this.toolbarRef}>
					<Button>
						<img src="logo.png" alt="Gyloh" height="40"/>
					</Button>
					<Actions className="navbar-actions">
						{actions}
					</Actions>
					<Options>
						{
							overflow.length > 0 &&
							<Dropdown name="{Overflow}">
								{overflow.map(e => <MenuItem>{e}</MenuItem>)}
							</Dropdown>
						}
					</Options>
				</Toolbar>
			</AppBar>
		);
	}
}