import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarIcon from "@material-ui/icons/CalendarToday"
import React from "react";
import theme from "../theme";
import styled from "styled-components";

export default class PageBar extends React.Component<{onOpenMenu?: ((e?: React.MouseEvent) => void), className?: string}> {
	render() {
		const Heading = styled.span`
			margin: ${theme.spacing(0, 2)};
		`;

		const TitleLong = styled(Typography)`
			display: none;
			${theme.breakpoints.up("sm")} {
				display: inline;
			}
		`;

		const TitleShort = styled(Typography)`
			display: inline;
			${theme.breakpoints.up("sm")} {
				display: none;
			}
		`;

		const Icons = styled.span`
			position: relative;
			float: right;
		`;

		const Grow = styled.span`flex-grow: 1;`;

		return (
			<AppBar position="static" className={this.props.className}>
				<Toolbar>
					<IconButton color="inherit" onClick={this.props.onOpenMenu}><MenuIcon /></IconButton>
					<Heading>
						<TitleLong variant="h5">Gymnasium Lohbrügge</TitleLong>
						<TitleShort variant="h5">Gyloh</TitleShort>
					</Heading>
					<Grow />
					<Icons>
						<IconButton color="inherit" aria-label="Seite durchsuchen"><SearchIcon /></IconButton>
						<IconButton color="inherit" aria-label="Kalender ansehen"><CalendarIcon /></IconButton>
					</Icons>
				</Toolbar>
			</AppBar>
		);
	}
}