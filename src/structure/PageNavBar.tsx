import React from "react";
import NavBar from "../common/Navbar";

class PageNavBar extends React.Component {
	render() {
		return (
			<NavBar leading={<span>logo</span>}>
				<span>test</span>
				<span>test2</span>
			</NavBar>
		);
	}
}

export default PageNavBar;