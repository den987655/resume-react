import styled from 'styled-components'

type FlexWrapperProps = {
	direction?: string;
	justify?: string
	align?: string
	wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
	display: flex;
	flex-direction: ${props => props.direction || 'undefined'};
	justify-content: ${props => props.justify || 'undefined'};
	align-items: ${props => props.align || 'undefined'};
	flex-wrap: ${props => props.wrap || 'undefined'};
	
`