import React from 'react';
import styled from "styled-components";
import {IconArrow} from "../../../../components/icon/Icon";

type ProjectPropsType = {
    iconId: string
    title: string
    description: string
    link?: string
    images: string
    height?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectText>{props.description}</ProjectText>
            <ProjectImg>
                <img
                    src={props.images}
                    alt={props.title}
                    style={{ height: props.height || '166px' }}
                />
            </ProjectImg>
            <ProjectLink href="#">
                <IconArrow iconId={props.iconId} />
            </ProjectLink>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 21px;
    border: 1px solid var(--mirage);
    border-radius: 12px;
    max-width: 100%;
    width: 100%;
    height: 456px;
    backdrop-filter: blur(12px);
    background: var(--woodsmoke);

`
const ProjectTitle = styled.h3`
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 2.3rem;
    line-height: 139%;
    color: var(--nero);
    padding-bottom: 12px;
`
const ProjectText = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 148%;
    color: var(--emperor);
    padding-bottom: 12px;
    text-align: center;
`
const ProjectLink = styled.a`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 169%;
    text-align: center;
    color: var(--santas-gray);
    padding-bottom: 12px;
`
const ProjectImg = styled.div`
    img {
        width: 230px;
        object-fit: contain;
        transition: transform 0.3s ease;
        &:hover {
            transform: rotate(-5deg);
        }
    }
`