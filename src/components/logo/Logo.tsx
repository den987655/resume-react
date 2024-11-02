import React from 'react'
import {Icon, IconContact, IconLogo} from '../icon/Icon'
import styled from "styled-components";

export const Logo = () => {
    return (
        <LinkStyles>
            <a href='#'><IconLogo iconId={'logo'}/></a>
            <span>Mirrorfolio</span>
        </LinkStyles>
    )
}

const LinkStyles = styled.div`
    display: flex;
    align-items: center;
    a {
        padding-right: 8px;
    }
    span {
        font-weight: 900;
        font-size: 2.8rem;
        letter-spacing: -0.07em;
        color: #fff;
        margin-right: 10px;
    }
`


