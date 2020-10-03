// TODO error security

import { removeHTML } from "../util";

export class NewsFilesNotFoundError extends Error {
	constructor(expectedURL: string) {
		super(`The json file containing recent news could not be found. It should be located at ${expectedURL}`)
	}
}

export class NewsNotFoundError extends Error {
	public readonly filename: string;

	constructor(filename: string) {
		super(`The news file at "${filename}" could not be found. Create it or change the file URL.`)
		this.filename = filename;
	}
}

export default class NewsModel {
	private static readonly NEWS_LOCATION = process.env.PUBLIC_URL + "/news/"
	private static readonly JSON_LOCATION = NewsModel.NEWS_LOCATION + "news.json";
	private static readonly PREVIEW_LENGTH = 150;
	private static _filenames: string[] | null;

	public readonly markdown: string;
	public readonly name: string;

	constructor(markdown: string, name: string) {
		this.markdown = markdown.trim();
		this.name = name;
	}

	public getHeading(): string | null {
		const lines = this.markdown.split("\n");
		return lines[0].replace(/^#/, "").trim();
	}

	public getContent(): string | null {
		const lines = removeHTML(this.markdown).trim().split("\n");
		return lines.filter((l, i) => !l.startsWith("#") || /^=+$|^-+$/.test(lines[i + 1])).join("\n");
	}

	public getContentPreview(): string | null {
		const content = this.getContent();
		if(!content) return null;

		const paragraphs = content.split("\n\n");
		let current = paragraphs.shift();
		let preview = "";

		do preview += current + "\n\n";
		while(preview.length < NewsModel.PREVIEW_LENGTH && (current = paragraphs.shift()));
		preview = preview.trimEnd();
		
		return preview;
	}

	private static async fetchFilenames(): Promise<string[]> {
		const data = await fetch(NewsModel.JSON_LOCATION);
		if(!data.ok)
			throw new NewsFilesNotFoundError(NewsModel.JSON_LOCATION)
		const names = await data.json() as string[];
		return names;
	}

	private static async getFilenames(): Promise<string[]> {
		if(this._filenames) return this._filenames;
		return (this._filenames = await this.fetchFilenames());
	}

	public static async getNews(filename: string): Promise<NewsModel> {
		if(!filename.includes(".")) filename += ".md";
		const data = await fetch(NewsModel.NEWS_LOCATION + filename);
		if(!data.ok)
			throw new NewsNotFoundError(filename);
		const text = await data.text();
		return new NewsModel(text, filename.split("/").pop()?.replace(/\.md$/, "") || "");
	}

	public static async get(num?: number): Promise<NewsModel[]> {
		return Promise.all(
			(await this.getFilenames())
			.slice(0, num)
			.map(name => this.getNews(name))
		);
	}

	public static async getLatest(): Promise<NewsModel> {
		return (await this.get(1))[0];
	}
}