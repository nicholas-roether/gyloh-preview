import React from "react";
import { CSSTransition } from "react-transition-group";
import theme from "../theme";
import { images } from "../structure/star_images.json";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";

const SLIDE_DURATION = 300;

const styles = createStyles({
	starWrapper: {
		position: "relative",
		backgroundColor: theme.palette.secondary.main,
		top: 0,
		left: 0,
		width: "400px",
		height: "400px",
		maxWidth: "80vh",
		maxHeight: "80vh",
		margin: theme.spacing(2, 2, 2, 0),
		clipPath: `polygon(
			30.5699% 3.9297%, 
			57.952% 15.9153%, 
			87.8111% 17.2843%, 
			84.8738% 47.0301%, 
			92.7987% 75.8509%, 
			63.6011% 82.2491%, 
			38.6399% 98.6924%, 
			23.5321% 72.9009%, 
			0.1803% 54.2427%, 
			20.0409% 31.9043%
		)`,
		[theme.breakpoints.up("md")]: {
			flex: "0 0 400px",
		}
	},
	imageWrapper: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		width: "100%",
		height: "100%"
	},
	image: {
		height: "100%",
		// TODO make dependant on theme
		transition: `opacity ease-out ${SLIDE_DURATION}ms`
	},
	"@keyframes fadeIn": {
		from: { opacity: 0 },
		to: { opacity: 1}
	},
	animation: {
		opacity: 0,
		animation:  `$fadeIn ${SLIDE_DURATION}ms`,
	}
});

interface StarState {
	image: number
}

class Star extends React.Component<WithStyles<typeof styles>, StarState> {
	private static readonly SLIDE_INTERVAL = 5000;
	state = {image: 0, initial: true}

	componentDidUpdate() {
		this.stageRefresh();
	}

	componentDidMount() {
		this.stageRefresh();
	}

	private stageRefresh() {
		setTimeout(() => this.setState(prev => ({image: (prev.image + 1) % images.length, initial: false})), Star.SLIDE_INTERVAL);
	}

	render() {
		const { classes } = this.props;

		const transitionStyles: {[key: string]: any} = {
			entering:	{ opacity: 0 },
			entered:	{ opacity: 1 },
			exiting:	{ opacity: 1 },
			exited:		{ opacity: 0 }
		}

		let prevImage = (this.state.image + images.length - 1) % images.length;

		return (
			<div className={classes.starWrapper}>
				<span className={classes.imageWrapper}>
					<img className={classes.image} src={images[prevImage]} alt="Star Slide" />
				</span>
				<span className={classes.imageWrapper}>
				<CSSTransition key={this.state.image} in={true} timeout={0} appear={!this.state.initial}>
					{state => <img
						className={classes.image}
						style={transitionStyles[state]} 
						src={images[this.state.image]} 
						alt="Star Slide" 
					/>}
				</CSSTransition>
				</span>
			</div>
		);
	}
}

export default withStyles(styles)(Star);