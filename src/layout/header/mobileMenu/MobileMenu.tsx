import React from 'react'
import styled, {css} from 'styled-components'
import {theme} from "../../../components/styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}><a href="#">{item}</a></li>
                    })}
                </ul>
            </MobileMenuPopup>


        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.mobile} (
        display: block;
    )
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: var(--ebony-clay);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    display: none;
    height: 100vh;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    li {
        font-family: var(--font-family), serif;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 150%;
        color: #fff;
        margin-right: 16px;
        margin-left: 12px;
    }
`

const BurgerButton = styled.nav<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: var(--catskill-white);
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: var(--catskill-white);
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: var(--catskill-white);
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

