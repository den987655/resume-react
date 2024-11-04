import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../components/styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return <li key={index}><a href="#">{item}</a></li>
				})}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-grow: 1;

	& ul {
		display: flex;
		@media ${theme.media.mobile} {
			display: none;
		} 
	
	}

	li a{
		font-family: var(--font-family), serif;
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 150%;
		color: #fff;
		margin-right: 16px;
		margin-left: 12px;
		display: inline-block;
		transition: transform 0.3s ease;
	}
	
	a:hover {
		transform: scale(1.1);
	}
	
`
