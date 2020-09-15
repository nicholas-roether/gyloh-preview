import { Box, Divider, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import { 
	Home as HomeIcon, 
	NewReleases as NewsIcon, 
	Grade as GradesIcon,
	Group as AboutIcon,
	Info as InfoIcon,
	Contacts as ContactIcon,
	ContactMail as NewsletterIcon,
	EmojiFoodBeverage as CafeteriaIcon,
	Forum as AlumniIcon,
	CalendarToday as PlannerIcon,
} from "@material-ui/icons";
import React from "react";
import { MouseEventListener } from "../util";
import EduportLaunchpad from "./EduportLaunchpad";
import ListItemCollapse from "../common/ListItemCollapse";
import ListItemLink from "../common/ListItemLink";
import SideNav, { SideNavHeader, SideNavList } from "../common/SideNav";

export default class PageNav extends React.Component<{open: boolean, onOpen: MouseEventListener, onClose: MouseEventListener} > {
	render() {
		
		return (
			<SideNav
				open={this.props.open}
				onOpen={this.props.onOpen}
				onClose={this.props.onClose}
			>
				<SideNavHeader>
					<Button>
						<img src="logo.png" width="70%" alt="Gyloh" />
					</Button>
				</SideNavHeader>
				<SideNavList>
					{/* Include greeting here */}
					<ListItemLink to="/">
						<ListItemIcon><HomeIcon /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemLink>
					{/* -> Schulprofil */}
					<ListItemCollapse to="/about" text={
						<ListItemText>Über Uns</ListItemText>
					} icon={
						<ListItemIcon><AboutIcon/></ListItemIcon>
					}>
						<ListItemLink to="/about/menschen">
							<ListItemText primary="Menschen" />
						</ListItemLink>
						<ListItemLink to="/about/fördern">
							<ListItemText primary="Fördern &amp; Fordern" />
						</ListItemLink>
						<ListItemLink to="/about/beratung">
							<ListItemText primary="Beratung" />
						</ListItemLink>
						<ListItemLink to="/about/ausland">
							<ListItemText primary="Ausland" />
						</ListItemLink>
						<ListItemLink to="/about/projekte">
							<ListItemText primary="Projekte &amp; Events" />
						</ListItemLink>
						<ListItemLink to="/about/partner">
							<ListItemText primary="Partner" />
						</ListItemLink>
					</ListItemCollapse>
					<ListItemCollapse
						text={<ListItemText primary="Klassenstufen" />}
						icon={<ListItemIcon><GradesIcon /></ListItemIcon>}
					>
						<ListItemLink to="/klassenstufen/unterstufe">
							<ListItemText>Unterstufe</ListItemText>
						</ListItemLink>
						<ListItemLink to="/klassenstufen/mittelstufe">
							<ListItemText>Mittelstufe</ListItemText>
						</ListItemLink>
						<ListItemLink to="/klassenstufen/oberstufe">
							<ListItemText>Oberstufe</ListItemText>
						</ListItemLink>
					</ListItemCollapse>
					<ListItemLink to="/news">
						<ListItemIcon><NewsIcon /></ListItemIcon>
						<ListItemText primary="News" />
					</ListItemLink>
					<ListItemLink to="/info">
						<ListItemIcon><InfoIcon /></ListItemIcon>
						<ListItemText primary="Info &amp; Service" />
					</ListItemLink>
					<ListItemLink to="/contact">
						<ListItemIcon><ContactIcon /></ListItemIcon>
						<ListItemText primary="Kontakt" />
					</ListItemLink>
					<ListItemLink to="/mensa">
						<ListItemIcon><CafeteriaIcon /></ListItemIcon>
						<ListItemText primary="Mensa" />
					</ListItemLink>
					<ListItemLink to="/alumni">
						<ListItemIcon><AlumniIcon /></ListItemIcon>
						<ListItemText primary="Alumni" />
					</ListItemLink>
					<ListItemLink to="/planner">
						<ListItemIcon><PlannerIcon /></ListItemIcon>
						<ListItemText primary="Vertretungsplan" />
					</ListItemLink>
					<ListItemLink to="/newsletter">
						<ListItemIcon><NewsletterIcon /></ListItemIcon>
						<ListItemText primary="Newsletter" />
					</ListItemLink>
					<Box mb={3} />
					<Divider />
					<Box pt={3} pb={3}>
						<EduportLaunchpad />
					</Box>
				</SideNavList>
			</SideNav>
		);
	}
}