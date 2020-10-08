import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

const Heading: React.FC<TypographyProps> = props => <Typography gutterBottom={true} {...props} />;

export default Heading;