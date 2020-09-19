import React from "react";
import { Transition } from "react-transition-group";
import theme from "../theme";
import { images } from "../structure/star_images.json";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";

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
	}
});

interface StarState {
	image: number
}

class Star extends React.Component<WithStyles<typeof styles>, StarState> {
	private readonly SLIDE_INTERVAL = 5000;
	private readonly SLIDE_DURATION = 300;
	state = {image: 0, initial: true}

	componentDidUpdate() {
		this.stageRefresh();
	}

	componentDidMount() {
		this.stageRefresh();
	}

	private stageRefresh() {
		setTimeout(() => this.setState(prev => ({image: (prev.image + 1) % images.length, initial: false})), this.SLIDE_INTERVAL);
	}

	render() {
		const { classes } = this.props;

		const defaultStyles = {
			transition: `opacity ease-out ${this.SLIDE_DURATION}ms`,
			height: "100%"
		}

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
					<Transition in={!this.state.initial} timeout={0}>
						{state => (
							<img src={images[prevImage]} alt="Star Slide" style={{
								...defaultStyles,
								...transitionStyles[state]
							}} />
						)}
					</Transition>
				</span>
				<span className={classes.imageWrapper}>
					<Transition in={true} timeout={100} appear={!this.state.initial}>
						{state => (
							<img src={images[this.state.image]} alt="Star Slide" style={{
								...defaultStyles,
								...transitionStyles[state]
							}} />
						)}
					</Transition>
				</span>
			</div>
		);
	}
}

export default withStyles(styles)(Star);