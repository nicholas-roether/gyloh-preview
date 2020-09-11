import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import "./PageNavbar.css"
import Nav from "react-bootstrap/esm/Nav";
import PageNavItem from "./PageNavItem";

class PageNavbar extends React.Component {
	render() {
		return (
			<Navbar id="navbar" expand="lg">
				<NavbarBrand id="brand">
					<a href="/">
						<img id="logo" src="logo.png" alt="Gyloh"/>
					</a>
				</NavbarBrand>
				<Nav id="nav">
					<PageNavItem name="HOME" href="/" />
				</Nav>
				<Nav id="actions">
					<button>test</button>
				</Nav>
			</Navbar>
		);
	}
}

export default PageNavbar;