import {Button, Menu, PopoverOrigin } from "@material-ui/core";
import React from "react";

interface DropdownProps {
	open?: boolean,
	element: React.ReactElement,
	id?: string,
	menuId?: string,
	origin?: PopoverOrigin
}

const Dropdown: React.FC<DropdownProps> = props => {
	const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null);
	const open: React.MouseEventHandler = e => setAnchorEl(e.currentTarget);
	const close: React.MouseEventHandler = e => setAnchorEl(null);
	return (
		<span id={props.id}>
			<Button 
				className="dropdown-button"
				color="inherit" 
				aria-controls="simple-menu" 
				aria-haspopup="true"
				onClick={(e) => open(e)}
			>
				{props.element}
			</Button>
			<Menu 
				open={Boolean(anchorEl)} 
				id={props.menuId} 
				anchorEl={anchorEl}
				anchorOrigin={props.origin}
				onClick={(e) => {
					if(e.target instanceof HTMLElement && e.target.parentNode === e.currentTarget) close(e);
				}}
				keepMounted={true}
			>
				{props.children}
			</Menu>
		</span>
	)
}

export type {
	DropdownProps
}

export default Dropdown;