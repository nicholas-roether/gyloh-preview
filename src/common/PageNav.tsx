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
import EduportLaunchpad from "./EduportLaunpad";
import ListItemCollapse from "./ListItemCollapse";
import ListItemLink from "./ListItemLink";
import SideNav, { SideNavHeader, SideNavList } from "./SideNav";

export default class PageNav extends React.Component<{open: boolean, onOpen: MouseEventListener, onClose: MouseEventListener, swipeable?: boolean} > {
	render() {
		
		return (
			<SideNav
				open={this.props.open}
				onOpen={this.props.onOpen}
				onClose={this.props.onClose}
				swipeable={this.props.swipeable}
			>
				<SideNavHeader>
					<Button>
						<img src="logo.png" width="70%" alt="Gyloh" />
					</Button>
				</SideNavHeader>
				<SideNavList>
					<ListItemLink to="/">
						<ListItemIcon><HomeIcon /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemLink>
					{/* <ListItemLink to="/about">
						<ListItemIcon><AboutIcon /></ListItemIcon>
						<ListItemText primary="Über Uns" />
					</ListItemLink> */}
					<ListItemCollapse to="/about" text="Über Uns" icon={<AboutIcon />}>
						<ListItemLink to="/about/greeting">
							<ListItemText primary="Begrüßung" />
						</ListItemLink>
					</ListItemCollapse>
					<ListItemLink to="/grades">
						<ListItemIcon><GradesIcon /></ListItemIcon>
						<ListItemText primary="Klassenstufen" />
					</ListItemLink>
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
					{/* Is this ok?*/}
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