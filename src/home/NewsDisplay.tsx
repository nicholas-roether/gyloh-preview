import React from "react";
import CardDisplay from "../common/CardDisplay";
import News from "../model/News";
import NewsPreview from "./NewsPreview";

interface NewsDisplayState {
	cards: React.ReactElement[];
}

export default class NewsDisplay extends React.Component<{}, NewsDisplayState> {
    private static readonly NUM_CARDS = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 3,
		xl: 3
	}
	private static readonly NUM_ARTICLES = 9

	state = {cards: []};

	constructor(props: {}) {
		super(props);
		NewsDisplay.getCards().then(cards => this.setState({cards}));
	}

	render() {
		return (
			<CardDisplay numCards={NewsDisplay.NUM_CARDS}>
				{this.state.cards}
			</CardDisplay>
		);
	}

	private static async getCards(): Promise<React.ReactElement[]> {
		const news = await News.get(NewsDisplay.NUM_ARTICLES);
		return news.map(n => <NewsPreview news={n} />);
	}
}