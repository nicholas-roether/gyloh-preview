import React from "react"
import NavItem from "react-bootstrap/esm/NavItem"
import "./PageNavItem.css"

class PageNavItem extends React.Component<{
	id?: string,
	name: string,
	href: string
}> {
	render() {
		return (
			<NavItem id={this.props.id} className="page-nav-item">
				<a href={this.props.href}>{this.props.name}</a>
			</NavItem>
		);
	}
}

export default PageNavItem;