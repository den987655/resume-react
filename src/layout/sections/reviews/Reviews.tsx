import React from 'react';
import styled from "styled-components";
import {SectionTittle} from "../../../components/SectionTitle";
import {StyledStripe} from "../../../components/stripe/Stripe";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../components/styles/Theme";

export const Reviews = () => {
    return (
        <StyledReviews>
            <SectionTittle>Client Stories</SectionTittle>
            <StyledStripe margin={"20px 0"}/>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Slider/>
                <Slider/>
            </FlexWrapper>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
    min-height: 50vh;
    padding: 40px 0;
    margin-bottom: 48px;
    background-color: var(--cod-gray);
    @media ${theme.media.mobile} {
        margin-bottom: 48px;
    }
`