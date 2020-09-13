import { Box, Button, Icon, Menu } from "@material-ui/core";
import React from "react";

export default class Dropdown extends React.Component<{
	open?: boolean,
	name: string,
	id?: string,
	menuId?: string
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
					{this.props.name}
					<Box marginLeft="5px" >
						<Icon className="fas fa-caret-down" color="secondary" fontSize="small" style={{verticalAlign: "text-bottom"}}/>
					</Box>
				</Button>
				<Menu 
					open={Boolean(this.state.anchorEl)} 
					id={this.props.menuId} 
					anchorEl={this.state.anchorEl} 
					
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