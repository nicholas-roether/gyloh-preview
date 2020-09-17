import { Divider, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

export default class HomePage extends React.Component {
    render() {
        const OpeningWrapper = styled.div`
            display: flex;
			max-width: 1000px;
            justify-content: space-between;
			margin: 0 auto 8em;
        `;
        
        const ImageWrapper = styled.div`
            width: 400px;
			height: 400px;
            margin: ${theme.spacing(4)}px;
			/* TODO make this look better */
			clip-path: polygon(
				30.5699% 3.9297%, 
				57.952% 15.9153%, 
				87.8111% 17.2843%, 
				84.8738% 47.0301%, 
				92.7987% 75.8509%, 
				63.6011% 82.2491%, 
				38.6399% 98.6924%, 
				23.5321% 72.9009%, 
				0.1803% 54.2427%, 
				20.0409% 31.9043%
			);
            ${theme.breakpoints.down("sm")} {
                display: none;
            }
        `;

        const TextWrapper = styled.span`
            margin-top: 110px;
			display: flex;
			flex-direction: column;
			justify-content: center;
        `;

        return (
            <div>
                <OpeningWrapper>
                    <TextWrapper>
                        <Typography variant="h3" gutterBottom>Herzlich Willkommen</Typography>
						<Typography variant="subtitle1" style={{
							fontStyle: "italic",
							fontWeight: "lighter"
						}}>"Mit dem Wir zum Ich - fördere dein Wissen und erweitere deinen Horizont!"</Typography>
                    </TextWrapper>
                    <ImageWrapper>
						<img src="banner.jpg" alt="Opening Banner" />
					</ImageWrapper>
                </OpeningWrapper>
                <Divider />
                <Typography variant="h4">News</Typography>
            </div>
        );
    }
}