import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
	return (
		<nav>
			<ul>
				<li><a>lee.tommy22@gmail.com</a></li>
				<li><a>+001 235 1245 2356</a></li>
			</ul>
		</nav>
	)
}

const StyledMenu = styled.div`
	ul {
		display: flex;
		gap: 30px;
	}
`