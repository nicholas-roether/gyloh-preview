import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";
import Section from "../common/Section";
import SlideIn from "../common/SlideIn";
import theme from "../theme";

export default class HomePage extends React.Component {
    render() {
        const OpeningWrapper = styled.div`
            display: flex;
			max-width: 920px;
            justify-content: space-between;
			align-items: flex-end;
			margin: 0 auto 8em;
			${theme.breakpoints.down("sm")} {
                flex-direction: column-reverse;
				align-items: center;
				text-align: center;
            }
        `;
        
		const ImageWrapper = styled.div`
			display: flex;
			justify-content: center;
            width: 400px;
			max-width: 80vw;
			max-height: 80vw;
			height: 400px;
			box-shadow: ${theme.shadows[1]};
            margin: ${theme.spacing(2)}px;
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
        `;

        const TextWrapper = styled.span`
			display: flex;
			flex-direction: column;
			justify-content: center;
		`;

        return (
            <div>
				<Section number={1}>
					<OpeningWrapper>
						<TextWrapper>
							<Typography variant="h3" gutterBottom>Herzlich Willkommen</Typography>
							<Typography variant="subtitle1" style={{
								fontStyle: "italic",
								fontWeight: "lighter"
							}}>"Mit dem Wir zum Ich - fördere dein Wissen und erweitere deinen Horizont!"</Typography>
							<SlideIn>
								<Box mt={3}>
									<DefaultButton to="/about">Über Uns</DefaultButton>
									<DefaultButton>Vertretungsplan</DefaultButton>
								</Box>
							</SlideIn>
						</TextWrapper>
						<ImageWrapper>
							<img src="galleries/banner/0.jpg" alt="Opening Banner"/>
						</ImageWrapper>
					</OpeningWrapper>
				</Section>
				<Section number={2}>
                	<Typography variant="h4">News</Typography>
				</Section >
            </div>
        );
    }
}