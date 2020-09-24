import { Box, createStyles, Divider, ListItem, ListItemIcon, ListItemText, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { 
	Home as HomeIcon, 
	NewReleases as NewsIcon, 
	CalendarToday as PlannerIcon,
	Email as EmailIcon,
	Folder as FilesIcon,
	AccountCircle as AccountIcon,
	Help as HelpIcon,
	Movie as MediaLibIcon,
	MenuBook as HistoryBooxIcon
} from "@material-ui/icons";
import Dropdown from "../common/Dropdown";

const styles = (theme: Theme) => createStyles({
	textSizedImage: {
		height: theme.typography.h4.fontSize
	}
});

class EduportLaunchpad extends React.Component<WithStyles<typeof styles>> {
	render() {
		const { classes } = this.props;
		return (
			<Dropdown 
				element={<img src="images/eduport.png" width="70%" alt="EduPort"/>}
				origin={{horizontal: "right", vertical: "top"}}
			>
				<ListItem button>
					<ListItemIcon><HomeIcon /></ListItemIcon>
					<ListItemText primary="Startseite" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><AccountIcon /></ListItemIcon>
					<ListItemText primary="Account" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><NewsIcon /></ListItemIcon>
					<ListItemText primary="Neuigkeiten" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><PlannerIcon /></ListItemIcon>
					<ListItemText primary="Termine" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><EmailIcon /></ListItemIcon>
					<ListItemText primary="E-Mail" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><FilesIcon /></ListItemIcon>
					<ListItemText primary="Dateien" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><HelpIcon /></ListItemIcon>
					<ListItemText primary="Hilfe" />
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemIcon><MediaLibIcon /></ListItemIcon>
					<ListItemText primary="Schulmediathek" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><HistoryBooxIcon /></ListItemIcon>
					<ListItemText primary="Geschichtsbuch" />
				</ListItem>
				<Divider />
				<Box mt={1} mb={1}>
					<ListItem button>
							<img 
								className={classes.textSizedImage} 
								src="images/dll.png" 
								alt="digital learing lab"
							/>
					</ListItem>
				</Box>
			</Dropdown>
		);
	}
}

export default withStyles(styles)(EduportLaunchpad);