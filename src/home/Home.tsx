import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

export default class HomePage extends React.Component {
    render() {
        const OpeningWrapper = styled.div`
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
			margin: auto;
            margin-bottom: 8em;
        `;
        
        const OpeningImage = styled.img`
            width: 50%;
            margin: ${theme.spacing(4)}px;
			/* TODO make this look better */
			clip-path: polygon(45% 0, 67% 18%, 98% 24%, 84% 54%, 91% 86%, 57% 82%, 24% 96%, 22% 65%, 0 37%, 28% 23%);
            ${theme.breakpoints.down("sm")} {
                display: none;
            }
        `;

        const OpeningText = styled.span`
            padding: ${theme.spacing(4, 3, 4, 0)};
        `;

        return (
            <div>
                <OpeningWrapper>
                    <OpeningText>
                        <Typography variant="h3">Herzlich Willkommen</Typography>
                    </OpeningText>
                    <OpeningImage src="banner.jpg" alt="Opening Banner" />
                </OpeningWrapper>
                {/* <Divider /> */}
                <Typography variant="h4">News</Typography>
            </div>
        );
    }
}