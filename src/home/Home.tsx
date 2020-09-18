import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";
import Section from "../common/Section";
import SlideIn from "../common/SlideIn";
import theme from "../theme";
import Star from "./Star";

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
						<Star />
					</OpeningWrapper>
				</Section>
				<Section number={2}>
                	<Typography variant="h4">News</Typography>
				</Section >
            </div>
        );
    }
}