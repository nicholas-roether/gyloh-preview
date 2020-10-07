import { Box, Divider, ListItemIcon, ListItemText, makeStyles, Theme } from "@material-ui/core";
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
import eduportImage from "../images/eduport.png";
import dllImage from "../images/dll.png";
import ExternalNavOption from "./ExternalNavOption";

const useStyles = makeStyles((theme: Theme) => ({
	textSizedImage: {
		height: theme.typography.h4.fontSize
	}
}));

const EduportLaunchpad: React.FC = props => {
	const classes = useStyles();
	return (
		<Dropdown 
			element={<img src={eduportImage} width="70%" alt="EduPort"/>}
			origin={{horizontal: "right", vertical: "top"}}
		>
			<ExternalNavOption to="https://gyloh.hamburg.de/">
				<ListItemIcon><HomeIcon /></ListItemIcon>
				<ListItemText primary="Startseite" />
			</ExternalNavOption>
			<ExternalNavOption to="https://user.eduport.hamburg.de/konto">
				<ListItemIcon><AccountIcon /></ListItemIcon>
				<ListItemText primary="Account" />
			</ExternalNavOption>
			<ExternalNavOption to="https://gyloh-news.eduport.hamburg.de/">
				<ListItemIcon><NewsIcon /></ListItemIcon>
				<ListItemText primary="Neuigkeiten" />
			</ExternalNavOption>
			<ExternalNavOption to="https://news.eduport.hamburg.de/">
				<ListItemIcon><PlannerIcon /></ListItemIcon>
				<ListItemText primary="Termine" />
			</ExternalNavOption>
			<ExternalNavOption to="https://groupware.eduport.hamburg.de/SOGo">
				<ListItemIcon><EmailIcon /></ListItemIcon>
				<ListItemText primary="E-Mail" />
			</ExternalNavOption>
			<ExternalNavOption to="https://repo.eduport.hamburg.de/edu-sharing/shibboleth?mode=1&locale=de_DE">
				<ListItemIcon><FilesIcon /></ListItemIcon>
				<ListItemText primary="Dateien" />
			</ExternalNavOption>
			<ExternalNavOption to="https://eduport.hamburg.de/">
				<ListItemIcon><HelpIcon /></ListItemIcon>
				<ListItemText primary="Hilfe" />
			</ExternalNavOption>
			<Divider />
			<ExternalNavOption to="https://hamburg.edupool.de/?eduid=HHeduport-720482">
				<ListItemIcon><MediaLibIcon /></ListItemIcon>
				<ListItemText primary="Schulmediathek" />
			</ExternalNavOption>
			<ExternalNavOption to="https://geschichtsbuch.hamburg.de/">
				<ListItemIcon><HistoryBooxIcon /></ListItemIcon>
				<ListItemText primary="Geschichtsbuch" />
			</ExternalNavOption>
			<Divider />
			<Box mt={1} mb={1}>
				<ExternalNavOption to="https://digitallearninglab.de/">
					<img 
						className={classes.textSizedImage} 
						src={dllImage}
						alt="digital learing lab"
					/>
				</ExternalNavOption>
			</Box>
		</Dropdown>
	);
}

export default EduportLaunchpad;