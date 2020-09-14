export type MouseEventListener = (e: React.MouseEvent) => void;

export function getHTMLElems(elems: HTMLCollection) {
	let children = new Array<HTMLElement>();
	Array.from(elems).forEach(e => e instanceof HTMLElement && children.push(e));
	return children;
}

export function classesIf(...classes: ([string, boolean] | string)[]): string {
	return classes
		.filter(t => typeof t === "string" || t[1])
		.map<string>(t => typeof t === "string" ? t : t[0])
		.join(" ");
}