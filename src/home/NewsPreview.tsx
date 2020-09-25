import { Link } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import React from "react";
import NewsCard from "./NewsCard";
import News from "../model/News";

export interface NewsPreviewProps {
	news?: News;
	load?: Promise<News>;
}

interface NewsPreviewState {
	news: News | null;
}

export default class NewsPreview extends React.Component<NewsPreviewProps, NewsPreviewState> {
	private static readonly NEWS_URL = "news/"
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
				<Markdown options={{
					overrides: {
						"a": {
							component: Link,
							props: {color: "secondary"}
						}
					}
				}}>
					{news.getContentPreview() || ""}
				</Markdown>
			</NewsCard>
		);
	}
}