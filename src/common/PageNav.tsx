import { Box, Button, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
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
					<ListItem button>
						<ListItemIcon><HomeIcon /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><AboutIcon /></ListItemIcon>
						<ListItemText primary="Über Uns" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><GradesIcon /></ListItemIcon>
						<ListItemText primary="Klassenstufen" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><NewsIcon /></ListItemIcon>
						<ListItemText primary="News" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><InfoIcon /></ListItemIcon>
						<ListItemText primary="Info &amp; Service" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><ContactIcon /></ListItemIcon>
						<ListItemText primary="Kontakt" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><CafeteriaIcon /></ListItemIcon>
						<ListItemText primary="Mensa" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><AlumniIcon /></ListItemIcon>
						<ListItemText primary="Alumni" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><PlannerIcon /></ListItemIcon>
						<ListItemText primary="Vertretungsplan" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><NewsletterIcon /></ListItemIcon>
						<ListItemText primary="Newsletter" />
					</ListItem>
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