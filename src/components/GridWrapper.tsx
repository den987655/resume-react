import styled from 'styled-components'

type GridWrapperProps = {
    repeat?: string;

}

export const GridWrapper = styled.div<GridWrapperProps>`
	display: grid;
	grid-template-columns: ${props => props.repeat || 'undefined'};

	
`