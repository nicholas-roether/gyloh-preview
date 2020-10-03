import { Link } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard";
import NewsModel from "../model/NewsModel";
import MuiMD from "../common/MuiMD";

export interface NewsPreviewProps {
	news?: NewsModel;
	load?: Promise<NewsModel>;
}

interface NewsPreviewState {
	news: NewsModel | null;
}

export default class NewsPreview extends React.Component<NewsPreviewProps, NewsPreviewState> {
	private static readonly NEWS_URL = "/news/"
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
				<MuiMD overrides={{
					"a": {
						component: Link,
						props: {color: "secondary"}
					}
				}}>
					{news.getContentPreview() || ""}
				</MuiMD>
			</NewsCard>
		);
	}
}