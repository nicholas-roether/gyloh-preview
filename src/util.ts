export function getHTMLElems(elems: HTMLCollection) {
	let children = new Array<HTMLElement>();
	Array.from(elems).forEach(e => e instanceof HTMLElement && children.push(e));
	return children;
}