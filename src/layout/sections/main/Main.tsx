import React from 'react';
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {IconContact} from "../../../components/icon/Icon";
import photo from '../../../assets/images/photo.png'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <MainBlock>
                    <span>Hi there, myself</span>
                    <h1>Ahammad Kabeer</h1>
                    <p>I help turn your ideas into
                        digital realities.</p>
                    <p className="last-paragraph">I'm a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences.</p>
                    <WrapperButton>
                        <StyledButton>
                            <ContainerButton>
                                <a href="#">Get in touch</a>
                                <IconContact iconId={'icon-contact'}/>
                            </ContainerButton>
                        </StyledButton>
                        <StyledButton>
                            <a href="#">View Resume</a>
                        </StyledButton>
                    </WrapperButton>

                </MainBlock>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding: 364px 0;
    min-height: 100vh;
`

const MainBlock = styled.div`
    width: 513px;

    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 151%;
        color: var(--santas-gray);
        padding-bottom: 36px;
    }

    h1 {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 5.8rem;
        line-height: 103%;
        color: var(--catskill-white);
        padding-bottom: 12px;
    }

    p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 113%;
        color: var(--mischka);
        padding-bottom: 12px;
    }

    .last-paragraph {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
        color: var(--santas-gray);
        padding-bottom: 36px;
    }


`
const WrapperButton = styled.div`
    display: flex;

`
const StyledButton = styled.button`
    border: 1px solid var(--mirage);
    border-radius: 12px;
    padding: 14px 25px;
    width: 152px;
    height: 48px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0);
    margin-right: 16px;
    cursor: pointer;

    & div {

    }

    & p {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 155%;
        text-align: center;
        color: var(--catskill-white);
        margin-right: 10px;

    }

    & a:last-child {
        font-size: 1.3rem;
        color: var(--gull-gray);
    }

    &:last-child:hover {
        background: var(--black);

        a {
            color: var(--catskill-white);
        }
    }

    &:hover {
        background-color: #333;
    }
`
const ContainerButton = styled.div`
    display: flex;

    a {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 155%;
        text-align: center;
        color: var(--catskill-white);
        margin-right: 10px;
    }
`
const Photo = styled.img`
    width: 470px;
    height: 470px;
    @media (max-width: 390px) {
        display: none;
    }

`
