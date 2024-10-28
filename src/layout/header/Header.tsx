import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { Logo } from "../../components/logo/Logo";
import {Link} from "../../components/link/Link";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
	return (
		<StyledHeader>
			<HeaderContainer>
				<Logo />
				<Menu />
				<Link />
			</HeaderContainer>
		</StyledHeader>
	)

}

const StyledHeader = styled.header`
	
	
`
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	border: 1px solid var(--mirage);
	border-radius: 12px;
	padding: 16px 33px 16px 33px;
	width: 1280px;
	height: 64px;
	max-width: 1280px;
	backdrop-filter: blur();
	background: rgba(24, 24, 29, 0.6);
	padding: 16.5px 33px;
`