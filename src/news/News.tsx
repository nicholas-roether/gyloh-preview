import React from "react";
import { withRouter } from "react-router-dom";
import { WithRouter } from "../util";
import NewsModel from "../model/News";
import NewsArticle from "./NewsArticle";

class News extends React.Component<WithRouter> {
	render() {
		const name = this.props.match.params.article as string;

		return (
			<div>
				<NewsArticle load={NewsModel.getNews(name)} />
			</div>
		)
	}
}

export default withRouter(News);