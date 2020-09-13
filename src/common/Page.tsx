import React from "react";
import PageBar from "./PageBar";
import PageNav from "./PageNav";

export default class Page extends React.Component {
	state = {navOpen: false};

	private openNav() {
		this.setState({navOpen: true});
	}

	private closeNav() {
		this.setState({navOpen: false});
	}

	render() {
		return (
			<div className="page">
				<PageBar onOpenMenu={() => this.openNav()} />
				<PageNav open={this.state.navOpen} onClose={() => this.closeNav()} />
			</div>
		);
	}
}