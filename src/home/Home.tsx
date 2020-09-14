import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Page from "../common/Page";
import theme from "../theme";

export default class HomePage extends React.Component {
    render() {
        const OpeningWrapper = styled.div`
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8em;
            ${theme.breakpoints.down("sm")} {
                justify-content: center;
                text-align: center;
            }
        `;
        
        const OpeningImage = styled.img`
            width: 50%;
            /* max-width: 600px; */
            ${theme.breakpoints.down("sm")} {
                display: none;
            }
        `;

        const OpeningText = styled.span`
            padding: ${theme.spacing(4, 3)};
        `;

        return (
            <Page>
                <OpeningWrapper>
                    <OpeningText>
                        <Typography variant="h3">Gymnasium Lohbrügge</Typography>
                        <Typography variant="h6">Herzlich Willkommen</Typography>
                    </OpeningText>
                    <OpeningImage src="banner.jpg" alt="Opening Banner" />
                </OpeningWrapper>
                {/* <Divider /> */}
                <Typography variant="h4">News</Typography>
            </Page>
        );
    }
}