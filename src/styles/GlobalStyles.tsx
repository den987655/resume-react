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
		background-color: #0d0d0d;
	}
	a {
        color: var(--catskill-white);
		text-decoration: none;
        cursor: pointer;
	}
    
    li {
        text-decoration: none;
    }
`
