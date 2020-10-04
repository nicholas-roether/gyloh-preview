import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MuiMD from "../common/MuiMD";
import Error404 from "../error/Error404";
import NewsModel from "../model/NewsModel";

function News(): React.ReactElement {
	const [content, setContent] = useState<string | null>(null);
	const { name } = useParams<{name: string}>();
	if(!name) return <Error404 location={window.location} />;
	if(!content) {
		NewsModel.getNews(name).then(model => setContent(model.markdown)).catch(() => setContent("news not found"));
		return <div>Loading...</div>; // TODO create loading indicator
	}
	return <MuiMD>{content}</MuiMD>
}

export default News;