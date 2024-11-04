import React from 'react'
import styled from 'styled-components'
import {HeaderMenu} from './headerMenu/HeaderMenu'
import {Logo} from "../../components/logo/Logo";
import {IconsLink} from "../../components/link/Link";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../components/styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {Container} from "../../components/Container";

const items = ["Story", "Work", "Scribbles", "Contact"]

export const Header = () => {
    return (

        <HeaderContent>
                <FlexWrapper align={"center"} justify={"space-between"}>

                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <IconsLink/>

                </FlexWrapper>
        </HeaderContent>

    )
}


const HeaderContent = styled.header`
    border: 1px solid var(--mirage);
    border-radius: 12px;
    padding: 16px 33px 16px 33px;
    backdrop-filter: blur();
    background: var(--woodsmoke);
    width: 1280px;
    margin: 0 auto;
    
    @media ${theme.media.mobile} {
        padding: 20px 24px;
        width: 100%;
    }
}
`