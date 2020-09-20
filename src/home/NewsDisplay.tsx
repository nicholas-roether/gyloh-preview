import React from "react";
import CardDisplay from "../common/CardDisplay";

export default class NewsDisplay extends React.Component {
    private static readonly NUM_CARDS = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 3,
		xl: 3
	}

	render() {
		return (
			<CardDisplay numCards={NewsDisplay.NUM_CARDS}>
				{this.props.children}
			</CardDisplay>
		);
	}
}