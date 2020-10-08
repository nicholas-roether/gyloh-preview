import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

const Paragraph: React.FC<TypographyProps> = props => <Typography paragraph={true} {...props} />;

export default Paragraph;