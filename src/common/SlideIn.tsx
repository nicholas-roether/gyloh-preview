import { withTheme, WithTheme } from "@material-ui/core";
import React from "react";
import { CSSTransition } from "react-transition-group";

type SlideInDirection = "top" | "bottom" | "left" | "right";

const DurationContext = React.createContext(0);

interface SlideInProps {
	from?: SlideInDirection;
	in?: boolean | null;
	timeout?: number;
	component?: React.ElementType;
}

class SlideIn extends React.Component<SlideInProps & WithTheme> {
	private static readonly OFFSET = 20;
	private readonly DURATION = this.props.theme.transitions.duration.enteringScreen;
	static contextType = DurationContext;

	private getOffsets(from?: SlideInDirection): [number, number] {
		switch(from) {
			case "top":
				return [0, -SlideIn.OFFSET];
			case "left":
				return [-SlideIn.OFFSET, 0];
			case "right":
				return [SlideIn.OFFSET, 0];
			default:
			case "bottom":
				return [0, SlideIn.OFFSET];
		}
	}

	render() {
		const { theme } = this.props;
		let offsets = this.getOffsets(this.props.from);

		const transitionStyles: {[key: string]: any} = {
			entering: {
				opacity: 0,
				left: offsets[0],
				top: offsets[1]
			},
			entered: {
				opacity: 1,
				left: 0,
				top: 0
			},
		}
		const defaultStyles = {
			position: "relative",
			transition: theme.transitions.create(["opacity", "top", "left"], {
				easing: theme.transitions.easing.easeIn,
				duration: this.DURATION
			})
		}

		let ownTimeout = this.props.timeout || 0;
		let totalTimeout = ownTimeout + this.context;
		return (
			<DurationContext.Provider value={this.context + ownTimeout + this.DURATION}>
				<CSSTransition 
					in={true} 
					timeout={totalTimeout}
					appear={true}
				>
					{state => (
						React.createElement(this.props.component || "div", {
							style: {
								...defaultStyles,
								...transitionStyles[state as string]
							}
						}, this.props.children)
					)}
				</CSSTransition>
			</DurationContext.Provider>
		);
	}
}

export type {
	SlideInProps
}

export default withTheme(SlideIn);