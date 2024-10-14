import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	}
	
	body {
		background-color: #fff;
	}
	a {
		text-decoration: none;
	}
`