import { Box, Divider, ListItemIcon, ListItemText, createStyles, List, Theme, makeStyles } from "@material-ui/core";
import * as icons from "@material-ui/icons";
import React from "react";
import EduportLaunchpad from "./EduportLaunchpad";
import CollapseNavOption from "../common/CollapseNavOption";
import LinkNavOption from "../common/LinkNavOption";
import SideNav from "../common/SideNav";
import CollapseItem from "../common/CollapseItem";
import ExternalNavOption from "../common/ExternalNavOption";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
	navHeader: {
		margin: theme.spacing(4, 0, 2),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	logoWrapper: {
		background: "#fff",
		textAlign: "center",
		padding: theme.spacing(2, 0)
	}
}));

export interface PageNavProps {
	open: boolean;
	onOpen: React.MouseEventHandler;
	onClose: React.MouseEventHandler
}

const PageNav: React.FC<PageNavProps> = props => {
	const classes = useStyles();
	return (
		<SideNav
			open={props.open}
			onOpen={props.onOpen}
			onClose={props.onClose}
		>
			<Link to="/" className={classes.navHeader}>
				<div className={classes.logoWrapper}>
					<img src={logoImage} width="70%" alt="Gyloh" />
				</div>
			</Link>
			<List>
				<LinkNavOption to="/">
					<ListItemIcon><icons.Home /></ListItemIcon>
					<ListItemText primary="Home" />
				</LinkNavOption>
				<CollapseNavOption to="/about" text="Über Uns" icon={<icons.People />}>
					<CollapseItem to="/about/menschen">Menschen</CollapseItem>
					<CollapseItem to="/about/fördern">Fördern &amp; Fordern</CollapseItem>
					<CollapseItem to="/about/beratung">Beratung</CollapseItem>
					<CollapseItem to="/about/ausland">Ausland</CollapseItem>
					<CollapseItem to="/about/projekte">Projekte &amp; Events</CollapseItem>
					<CollapseItem to="/about/partner">Partner</CollapseItem>
				</CollapseNavOption>
				<LinkNavOption to="/klassenstufen">
					<ListItemIcon><icons.School /></ListItemIcon>
					<ListItemText primary="Klassenstufen" />
				</LinkNavOption>
				<LinkNavOption to="/news">
					<ListItemIcon><icons.Announcement /></ListItemIcon>
					<ListItemText primary="News" />
				</LinkNavOption>
				<CollapseNavOption to="/info" text="Info" icon={<icons.Info />}>
					<CollapseItem to="/info/downloads">Downloads</CollapseItem>
					<CollapseItem to="/info/ganztag">Ganztag</CollapseItem>
					<CollapseItem to="/info/berufsorientierung">Berufsorientierung</CollapseItem>
					<CollapseItem to="/info/schulverien">Schulverein</CollapseItem>
				</CollapseNavOption>
				<LinkNavOption to="/kontakt">
					<ListItemIcon><icons.ContactSupport /></ListItemIcon>
					<ListItemText primary="Kontakt" />
				</LinkNavOption>
				<LinkNavOption to="/mensa">
					<ListItemIcon><icons.Fastfood /></ListItemIcon>
					<ListItemText primary="Mensa" />
				</LinkNavOption>
				<ExternalNavOption to="https://alumni.gyloh.de">
					<ListItemIcon><icons.Forum /></ListItemIcon>
					<ListItemText primary="Alumni" />
				</ExternalNavOption>
				<LinkNavOption to="/bewerber">
					<ListItemIcon><icons.PersonAdd /></ListItemIcon>
					<ListItemText primary="Bewerber" />
				</LinkNavOption>
				<LinkNavOption to="/vertretungsplan">
					<ListItemIcon><icons.Today /></ListItemIcon>
					<ListItemText primary="Vertretungsplan" />
				</LinkNavOption>
				<LinkNavOption to="/newsletter">
					<ListItemIcon><icons.Email /></ListItemIcon>
					<ListItemText primary="Newsletter" />
				</LinkNavOption>
			</List>
			<Box mb={3} />
			<Divider />
			<Box pt={3} pb={3}>
				<EduportLaunchpad />
			 </Box>
		</SideNav>
	);
}

export default PageNav;