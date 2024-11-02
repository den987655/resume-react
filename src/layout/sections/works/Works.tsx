import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledStripe} from "../../../components/stripe/Stripe";
import {SectionTittle} from "../../../components/SectionTitle";

export const Works = () => {
    return (

        <StyledWorks>

                <SectionTittle>Selected Work</SectionTittle>
                <StyledStripe margin={"0px 0 16px 0"} />
            <FlexWrapper align={"center"} justify={"space-between"}>
                    <ExperienceItem>
                        <h3>Menteor- A platform for
                            skill based one-to-one
                            mentorship</h3>
                        <p>Menteor is a one-of-a-kind
                            platform for personalised
                            mentorship, combining the…</p>
                        <a href="#">View Project</a>
                    </ExperienceItem>
                    <ExperienceItem>
                        <h3>Pouch - A headless
                            digital wallet &
                            rewarding system</h3>
                        <p>Pouch is a minimalist MVP
                            project designed to emulate the
                            functionality of a digital walle…</p>
                        <a href="#">View Project</a>
                    </ExperienceItem>
                    <ExperienceItem>
                        <h3>Club Sulaimani Website
                            Redesign and
                            Development</h3>
                        <p>During my tenure at Aufait, I
                            played a pivotal role as the
                            frontend developer for the…</p>
                        <a href="#">View Project</a>
                    </ExperienceItem>
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    padding-bottom: 48px;
`

const Skill = styled.div`

`

const Experience = styled.div`
    //display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    //display: flex;
    //gap: 16px;

    @media (max-width: 390px) {
        flex-direction: column;
    }
`

const ExperienceItem = styled.div`
    padding: 29px 21px 51px 21px;
    border: 1px solid var(--mirage);
    border-radius: 12px;
    width: 320px;
    height: 320px;
    backdrop-filter: blur(12px);
    background: var(--woodsmoke);
    h3 {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 23px;
        line-height: 139%;
        color: var(--nero);
        padding-bottom: 12px;
    }
    p {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 148%;
        color: var(--emperor);
        padding-bottom: 12px;
    }
    a {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 169%;
        text-align: center;
        color: var(--santas-gray);
        padding-bottom: 12px;
    }
`

