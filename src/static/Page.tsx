import { Box, createStyles, Divider, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { classesIf } from "../util";
import PageBar from "../static/PageBar";
import { DRAWER_WIDTH } from "../common/SideNav";
import PageNav from "./PageNav";

const useStyles = makeStyles((theme: Theme) => createStyles({
	bar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.leavingScreen,
		})
	},
	barOpen: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: theme.direction === "ltr" ? DRAWER_WIDTH : 0,
			marginRight: theme.direction === "ltr" ? 0 : DRAWER_WIDTH,
		}
	},
	contentWrapper: {
		transition: theme.transitions.create(['margin'], {
			easing: theme.transitions.easing.easeIn,
			duration: theme.transitions.duration.leavingScreen,
		})
	},
	content: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: theme.spacing(0, 1),
		[theme.breakpoints.up("sm")]: {
			padding: theme.spacing(0, 3)
		}
	},
	contentWrapperOpen: {
		transition: theme.transitions.create(['margin'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("md")]: {
			marginLeft: theme.direction === "ltr" ? DRAWER_WIDTH : 0,
			marginRight: theme.direction === "ltr" ? 0 : DRAWER_WIDTH,
		}
	}
}));

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
	onThemeChange?: () => void,
}

const Page: React.FC<PageProps> = props => {
	const [navOpen, setNavOpen] = React.useState<boolean>(false);
	const classes = useStyles();
	const { onThemeChange, ...other } = props;
	return (
		<div {...other}>
			<PageBar onOpenMenu={() => setNavOpen(true)} className={classesIf(
				classes.bar,
				[classes.barOpen, navOpen]
			)} onThemeChange={onThemeChange} />
			<PageNav open={navOpen} onOpen={() => setNavOpen(true)} onClose={() => setNavOpen(false)} />
			<Divider />
			<div className={classesIf(
					classes.contentWrapper,
					[classes.contentWrapperOpen, navOpen]
			)}>
				<Box marginX={4} marginY={1}>
					{/* TODO implement Breadcrumbs
					<Breadcrumbs aria-label="breadcrumbs">
						<Typography color="textPrimary">Home</Typography>
					</Breadcrumbs> */}
				</Box>
				<Box className={classes.content}>
					{props.children}
				</Box>			
			</div>
		</div>
	);
}

export type {
	PageProps
}

export default Page;