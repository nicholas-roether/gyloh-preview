import React from "react";
import styled from "styled-components";

export interface CardDisplayProps {
    maxPerPage: number
}

interface CardDisplayState {

}

export default class CardDisplay extends React.Component<CardDisplayProps> {
    render() {
        const CardWrapper = styled.div`
            display: flex;
        `;

        return (
            <CardWrapper>
                {this.props.children}
            </CardWrapper>
        );
    }
}