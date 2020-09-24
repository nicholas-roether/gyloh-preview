import Markdown from "markdown-to-jsx";
import React from "react";
import NewsCard from "../home/NewsCard";
import News from "../model/News";

export interface NewsPreviewProps {
	news?: News;
	load?: Promise<News>;
}

interface NewsPreviewState {
	news: News | null;
}

export default class NewsPreview extends React.Component<NewsPreviewProps, NewsPreviewState> {
	private static readonly NEWS_URL = "/news/read?a="
	state = {news: this.props.news || null}

	constructor(props: NewsPreviewProps) {
		super(props);
		if(!this.state.news && this.props.load)
			this.props.load.then(news => this.setState({news}));
	}

	render() {
		const { news } = this.state;
		if(!news) return <NewsCard />;
		return (
			<NewsCard heading={news.getHeading()} more={NewsPreview.NEWS_URL + news.name}>
				<Markdown>
					{news.getContentPreview() || ""}
				</Markdown>
			</NewsCard>
		);
	}
}