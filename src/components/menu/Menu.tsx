import React from 'react'
import styled from 'styled-components'
import {IconContact} from "../icon/Icon";

export const Menu = () => {
	return (
		<StyledMenu>
			<ul>
				<li><a>Story</a></li>
				<li><a>Work</a></li>
				<li><a>Scribbles</a></li>
				<li><a>Contact</a></li>
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
