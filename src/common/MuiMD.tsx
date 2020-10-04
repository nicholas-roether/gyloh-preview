import { Typography, TypographyVariant } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import React from "react";

function MuiMD(props: {children: string, overrides?: any}) {
	return (
		<Markdown options={{createElement: (Tag, props, ...children) => {
			let elem: React.ReactElement;
			if(typeof Tag === "string" && /h[0-9]/.test(Tag)) 
				elem = <span style={{fontSize: "0.5em"}}>{children}</span>
			else elem = <Tag {...props}>{children}</Tag>;
			return <Typography variant={Tag as TypographyVariant}>{elem}</Typography>;
		}, overrides: props.overrides}} {...props}>
			{props.children}
		</Markdown>
	);
}

export default MuiMD;