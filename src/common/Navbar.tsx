import React from "react";

class NavBar extends React.Component<{
	id?: string, 
	leading?: JSX.Element, 
	main: JSX.Element, 
	trailing?: JSX.Element
}> {
	render() {
		return (
			<header id={this.props.id}>
				{this.props.leading}
				{this.props.main}
				{this.props.trailing}
			</header>
		);
	} 
}

export default NavBar