import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {StyledStripe} from "../../components/stripe/Stripe";
import {theme} from "../../components/styles/Theme";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledBlock>
            <StyledStripe margin={"20px 0"} />
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <Content>
                    <LogoBlock>
                        <Logo></Logo>
                        <p>Thanks for stopping by ッ</p>
                        <p>With hearts,</p>
                    </LogoBlock>
                <BlockSocial>
                    <LinkSection title={"Links"} links={["Story", "Projects", "Scribbles", "Contact"]} />
                    <LinkSection title={"Elsewhere"} links={["GitHub", "Twitter", "LinkedIn", "Instagram"]} />
                </BlockSocial>
                </Content>
            </FlexWrapper>
            <StyledStripe width={"1248px"} margin={"48px auto"} />
            <FlexWrapper align={"center"} justify={"space-between"}>

                <Bottom>
                    <p>© 2024 Mirrorfolio.</p>
                    <p>All Rights Reserved.</p>
                </Bottom>
            </FlexWrapper>
            </Container>
        </StyledBlock>
    );
};

type LinkSectionProps = {
    title: string;
    links: string[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
    <SectionWrapper>
        <h3>{title}</h3>
        <StyledStripe margin={"20px 0"} width={"266px"} />
        <ul>
            {links.map((link: string, index: number) => (
                <li key={index}>
                    <a href="#">{link}</a>
                </li>
            ))}
        </ul>
    </SectionWrapper>
);

const StyledBlock = styled.footer`
    padding: 48px 0;


`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    @media ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;

        width: 100%;
    }
`
const LogoBlock = styled.div`

    p {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 143%;
        color: var(--santas-gray);
        margin: 20px 0;
    }
`
const BlockSocial = styled.div`
    display:flex;
`
const Links = styled.div`
    
`
const SectionWrapper = styled.div`
    padding: 20px;
    padding-bottom: 0;
    @media ${theme.media.mobile} {
        width: 100%;
    }
    h3 {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 167%;
        color: var(--catskill-white);
    }
    li {
        padding-bottom: 20px;
    }
    a {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 163%;
        color: var(--catskill-white);
    }
`

const Socials = styled.div`
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 143%;
        color: var(--santas-gray);
    }

    @media ${theme.media.mobile} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        width: 100%;
    }
`

