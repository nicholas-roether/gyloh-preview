import { Box, Divider } from "@material-ui/core";
import React from "react";
import SlideIn from "./SlideIn";

export interface SectionProps {
	number?: number
}

export default class Section extends React.Component<SectionProps> {
	private readonly timeoutFactor = 100;

	render() {
		const { number } = this.props;
		const timeout = number ? (number - 1) * this.timeoutFactor : 0;
		return (
			<Box mb={16}>
				<SlideIn timeout={timeout}>
					<Box mb={8}>{this.props.children}</Box>
					<Divider />
				</SlideIn>
			</Box>
		);
	}
}