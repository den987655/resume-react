import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { Logo } from "../../components/logo/Logo";
import {IconsLink} from "../../components/link/Link";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Story", "Work", "Scribbles", "Contact"]

export const Header = () => {
	return (
		<HeaderContent>
				<FlexWrapper align={"center"} justify={"space-between"}>

						<Logo />
						<Menu menuItems={items}/>
						<IconsLink />

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
`