import styled from 'styled-components'

type FlexWrapperProps = {
	direction?: string;
	justify?: string
	align?: string
	wrap?: string
	width?: string
	height?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
	
	display: flex;
	margin: 0 auto;
	max-width: 1487px;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'stretch'};
	flex-wrap: ${props => props.wrap || 'nowrap'};
	width: ${props => props.width || '1487px'};
`