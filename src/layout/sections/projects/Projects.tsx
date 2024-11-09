import React from 'react';
import styled from "styled-components";
import {StyledStripe} from "../../../components/stripe/Stripe";
import {SectionTittle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import photoOne from '../../../assets/images/image1.png'
import photoTwo from '../../../assets/images/image2.png'
import photoThree from '../../../assets/images/image3.png'
import {GridWrapper} from "../../../components/GridWrapper";


export const Projects = () => {
    return (

            <StyledProject>
                <SectionTittle>Project</SectionTittle>
                <StyledStripe margin={"0px 0 16px 0"} />
                    <GridWrapper gap={"16px"} template_column={"repeat(3, 1fr)"} justify={"space-between"}>

                        <Project
                            title={"My Story"}
                            description={"Who I am and what I do"}
                            images={photoOne}
                            iconId={"arrow"}
                        />
                        <Project
                            title={"Scribbles"}
                            description={"My thoughts and learnings on\n" +
                                "software development, and my\n" +
                                "journey."}
                            images={photoTwo}
                            height="166px"
                            iconId={"arrow"}
                        />
                        <Project
                            title={"Stack"}
                            description={"Languages frameworks and\n" +
                                "tools I use in my projects"}
                            images={photoThree}
                            height="166px"
                            iconId={"arrow"}
                        />

                        <Project
                            title={"My Story"}
                            description={"Who I am and what I do"}
                            images={photoOne}
                            iconId={"arrow"}
                        />
                        <Project
                            title={"Scribbles"}
                            description={"My thoughts and learnings on\n" +
                                "software development, and my\n" +
                                "journey."}
                            images={photoTwo}
                            height="166px"
                            iconId={"arrow"}
                        />
                        <Project
                            title={"Stack"}
                            description={"Languages frameworks and\n" +
                                "tools I use in my projects"}
                            images={photoThree}
                            height="166px"
                            iconId={"arrow"}
                        />
                    </GridWrapper>
            </StyledProject>
    );
};

const StyledProject = styled.section`
    
`


