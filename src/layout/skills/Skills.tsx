import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SkillsItem} from "../../components/SkillsItem";

export const Skills = () => {
    return (
        <FlexWrapper align={"center"} width={"1024px"} justify={"space-between"}>
        <StyledSkills>

            <SectionTittle>
                <h2>Selected Work</h2>
                <div></div>
            </SectionTittle>
            <Experience>
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
                </Experience>


        </StyledSkills>
        </FlexWrapper>
    );
};

const StyledSkills = styled.section`
    
`

const SectionTittle = styled.div`
    h2 {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 35px;
        line-height: 114%;
        color: var(--catskill-white);
        padding-bottom: 8px;
    }
    div {
    border: 1px solid var(--mirage);
    width: 992px;
    height: 2px;
    padding: 7px 0;
}
`

const Skill = styled.div`

`

const Experience = styled.div`
    //display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    display: flex;
    gap: 16px;
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

