import {Button, Menu, PopoverOrigin } from "@material-ui/core";
import React from "react";

export default class Dropdown extends React.Component<{
	open?: boolean,
	element: React.ReactElement,
	id?: string,
	menuId?: string,
	origin?: PopoverOrigin
}, {anchorEl: Element | null}> {
	state = {anchorEl: null}

	private open(e: React.MouseEvent) {
		this.setState({anchorEl: e.currentTarget});
	}

	private close() {
		this.setState({anchorEl: null});
	}

	render() {
		return (
			<span id={this.props.id}>
				<Button 
					className="dropdown-button"
					color="inherit" 
					aria-controls="simple-menu" 
					aria-haspopup="true"
					onClick={(e) => this.open(e)}
				>
					{this.props.element}
				</Button>
				<Menu 
					open={Boolean(this.state.anchorEl)} 
					id={this.props.menuId} 
					anchorEl={this.state.anchorEl}
					anchorOrigin={this.props.origin}
					onClick={(e) => {
						if(e.target instanceof HTMLElement && e.target.parentNode === e.currentTarget)
							this.close();
					}}
					keepMounted={true}
				>
					{this.props.children}
				</Menu>
			</span>
		);
	}
}