import React from "react";
import { Transition } from "react-transition-group";

type SlideInDirection = "top" | "bottom" | "left" | "right";

const DurationContext = React.createContext(0);

export interface SlideInProps {
	from?: SlideInDirection;
	in?: boolean | null;
	timeout?: number;
	component?: React.ElementType;
}

export default class SlideIn extends React.Component<SlideInProps> {
	private static readonly OFFSET = 20;
	private static readonly DURATION = 200;
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
			// TODO make dependant on theme
			transition: `opacity ease-in ${SlideIn.DURATION}ms, top ease-in ${SlideIn.DURATION}ms, left ease-in ${SlideIn.DURATION}ms`
		}

		let ownTimeout = this.props.timeout || 100;
		let totalTimeout = ownTimeout + this.context;
		return (
			<DurationContext.Provider value={this.context + ownTimeout + SlideIn.DURATION}>
				<Transition 
					in={true} 
					timeout={totalTimeout}
					appear={true}
					mountOnEnter
				>
					{state => (
						React.createElement(this.props.component || "div", {
							style: {
								...defaultStyles,
								...transitionStyles[state as string]
							}
						}, this.props.children)
					)}
				</Transition>
			</DurationContext.Provider>
		);
	}
}