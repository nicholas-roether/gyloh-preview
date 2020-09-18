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
		return (
			<Box mb={4} pb={2}>
				<SlideIn timeout={number ? (number - 1) * this.timeoutFactor : 0}>
					{this.props.children}
					<Divider />
				</SlideIn>
			</Box>
		);
	}
}