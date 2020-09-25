import Markdown from "markdown-to-jsx";
import React from "react";
import News from "../model/News";

// TODO PromiseLoader util component?

export interface NewsArticleProps {
	news?: News;
	load?: Promise<News>;
}

interface NewsArticleState {
	news: News | null;
}

export default class NewsArticle extends React.Component<NewsArticleProps, NewsArticleState> {
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