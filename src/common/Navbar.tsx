import React from "react";
import "./Navbar.css"

class NavBar extends React.Component<{
	id?: string, 
	leading?: JSX.Element, 
	actions?: JSX.Element
}> {
	render() {
		return (
			<header className="nav-bar" id={this.props.id}>
				{this.props.leading}
				<span id="main">
					{this.props.children}
				</span>
				<span id="actions">
					{this.props.actions}
					<i className="fas fa-bars"></i>
				</span>
			</header>
		);
	} 
}

export default NavBar;