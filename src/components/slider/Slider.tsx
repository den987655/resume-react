import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                <Slide>
                    <Text>I am delighted to recommend Ahammad Kabeer for his
                        outstanding contributions as a UI/UX designer and web
                        developer on our team. Throughout our collaboration, he
                        consistently demonstrated a remarkable ability to blend
                        creativity with technical expertise, resulting in exceptional
                        design solutions and user-friendly web applications.</Text>
                    <Name>Muhammed Sidan</Name>
                    <SubName>Head of Engineering at Cyber Square - AI & Coding for
                        Schools</SubName>
                </Slide>
            </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 450px;
    border: 1px solid var(--pickled-bluewood);
    border-bottom: none;
    border-radius: 16px;
    padding: 25px 33px 24px 33px;
    height: 280px;
    margin-right: 16px;
    @media ${theme.media.mobile} {

        padding: 33px;
        &:last-child {
            display: none;
        }
    }

`

const Slide = styled.div`
    border-left: 4px solid var(--ebony-clay);
    padding: 0px 0px 0px 20px;
    width: 384px;
    height: 231px;
    text-align: left;

    @media ${theme.media.mobile} {
        width: 100%;
    }
`

const Text = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 171%;
    color: var(--athens-gray);
    margin-bottom: 24px;

    @media ${theme.media.mobile} {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`

const Name = styled.span`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 168%;
    color: var(--gray-chateau);
`
const SubName = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 168%;
    color: var(--gray-chateau);
`