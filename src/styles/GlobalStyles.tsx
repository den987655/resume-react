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
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
`
