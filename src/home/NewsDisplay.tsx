import React from "react";
import CardDisplay from "../common/CardDisplay";
import NewsModel from "../model/NewsModel";
import NewsPreview from "./NewsPreview";

interface NewsDisplayState {
	cards: React.ReactElement[];
}

class NewsDisplay extends React.Component<{}, NewsDisplayState> {
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
		const news = await NewsModel.get(NewsDisplay.NUM_ARTICLES);
		return news.map((n, i) => <NewsPreview news={n} key={i} />);
	}
}

export default NewsDisplay;