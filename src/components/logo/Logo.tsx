import React from 'react'
import {Icon} from '../icon/Icon'
import styled from "styled-components";

export const Logo = () => {
    return (
        <LinkStyles>
            <span>Richard Max</span>
        </LinkStyles>
    )
}

const LinkStyles = styled.div`
    span {
        font-weight: 900;
        font-size: 2.8rem;
        letter-spacing: -0.07em;
        color: #fff;
        margin-right: 10px;
    }
`


