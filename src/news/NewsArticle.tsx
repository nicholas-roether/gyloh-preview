import Markdown from "markdown-to-jsx";
import React from "react";
import NewsModel from "../model/NewsModel";

// TODO PromiseLoader util component?

interface NewsArticleProps {
	news?: NewsModel;
	load?: Promise<NewsModel>;
}

interface NewsArticleState {
	news: NewsModel | null;
}

class NewsArticle extends React.Component<NewsArticleProps, NewsArticleState> {
	state = {news: this.props.news || null}

	constructor(props: NewsArticleProps) {
		super(props);
		if(!this.state.news && this.props.load)
			this.props.load.then(news => this.setState({news}));
	}

	render() {
		const { news } = this.state;
		if(!news) return <div />;
		return (
			<Markdown>{news.markdown}</Markdown>
		);
	}
}

export type {
	NewsArticleProps
}

export default NewsArticle;