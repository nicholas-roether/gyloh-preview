import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarIcon from "@material-ui/icons/CalendarToday"
import React, { MouseEventHandler } from "react";
import theme from "../theme";
import styled from "styled-components";
import Search from "../common/Search";

export interface PageBarProps {
	onOpenMenu?: MouseEventHandler;
	className: string;
}

export default class PageBar extends React.Component<PageBarProps> {
	render() {
		const Heading = styled.span`
			margin: ${theme.spacing(0, 2)};
		`;

		const TitleLong = styled(Typography)`
			display: none;
			${theme.breakpoints.up("md")} {
				display: inline;
			}
		`;

		const TitleShort = styled(Typography)`
			display: none;
			${theme.breakpoints.up("sm")} {
				display: inline;
			}
			${theme.breakpoints.up("md")} {
				display: none;
			}
		`;

		const Icons = styled.span`
			display: inline-flex;
			flex-grow: 1;
			justify-content: flex-end;
			${theme.breakpoints.up("sm")} {
				flex-grow: 0;
				position: relative;
				float: right;
			}
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
						<Search />
						<IconButton color="inherit" aria-label="Kalender ansehen"><CalendarIcon /></IconButton>
					</Icons>
				</Toolbar>
			</AppBar>
		);
	}
}