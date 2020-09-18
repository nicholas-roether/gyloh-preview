import { Box, Divider } from "@material-ui/core";
import React from "react";
import SlideIn from "./SlideIn";

export interface SectionProps {
	number?: number
}

export default class Section extends React.Component<SectionProps> {
	private readonly timeoutFactor = 300;

	render() {
		const { number } = this.props;
		return (
			<Box mb={16}>
				<SlideIn timeout={number ? (number - 1) * this.timeoutFactor : 0}>
					<Box mb={8}>{this.props.children}</Box>
					<Divider />
				</SlideIn>
			</Box>
		);
	}
}