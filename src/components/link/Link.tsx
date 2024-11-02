import React from 'react'
import {Icon} from '../icon/Icon'
import styled from "styled-components";

export const IconsLink = () => {
    return (
        <LinkStyles>
            <ul>
                <li><a href='#'><Icon iconId={'instagram'}/></a></li>
                <li><a href='#'><Icon iconId={'twitter'}/></a></li>
                <li><a href='#'><Icon iconId={'linkedin'}/></a></li>
            </ul>
        </LinkStyles>
    )
}

const LinkStyles = styled.div`
    ul {
        display: flex;
    }
    li {
        margin-right: 16px;
        &:first-child {
            margin-left: 33px;
        }
        &:last-child {
        margin-right: 0;
        }
    }
`


