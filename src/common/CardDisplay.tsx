import React from "react";
import styled from "styled-components";

export interface CardDisplayProps {
    maxPerPage: number
}

export default class CardDisplay extends React.Component<CardDisplayProps> {
    render() {
        const CardWrapper = styled.div`
            width: 100%;
            overflow: hidden;
        `;

        return (
            <CardWrapper>

            </CardWrapper>
        );
    }
}