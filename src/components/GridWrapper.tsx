import styled from 'styled-components'
import {theme} from "./styles/Theme";

type GridWrapperProps = {
    template_column?: string
    gap?: string;
    align?: string;
    justify?: string;
    wrap?: string
    grow?: string

}

export const GridWrapper = styled.div<GridWrapperProps>`
	display: grid;
	//grid-template-columns: repeat(auto-fit, minmax(100px, 320px));
    grid-template-columns: ${props => props.template_column || 'auto'};
    grid-gap: ${props => props.gap || 'unset'};
    justify-items: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'stretch'};

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`