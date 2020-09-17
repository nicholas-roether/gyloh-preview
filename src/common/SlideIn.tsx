import React from "react";
import { Transition } from "react-transition-group";

type SlideInDirection = "top" | "bottom" | "left" | "right";

export interface SlideInProps {
	from?: SlideInDirection;
	in?: boolean | null;
	timeout?: number;
	component?: React.ElementType;
}

export default class SlideIn extends React.Component<SlideInProps> {
	private readonly OFFSET = 200;

	private getOffsets(from?: SlideInDirection): [number, number] {
		switch(from) {
			case "top":
				return [0, -this.OFFSET];
			case "left":
				return [-this.OFFSET, 0];
			case "right":
				return [this.OFFSET, 0];
			default:
			case "bottom":
				return [0, this.OFFSET];
		}
	}

	render() {
		let offsets = this.getOffsets(this.props.from);
		const transitionStyles: {[key: string]: any} = {
			entering: {
				opacity: 0,
				left: offsets[0],
				top: offsets[0]
			},
			entered: {
				opacity: 1,
				left: 0,
				top: 0
			},
		}
		const defaultStyles = {
			position: "relative"
		}
		return (
			<Transition 
				in={true} 
				timeout={this.props.timeout || 200}
				appear
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
		);
	}
}