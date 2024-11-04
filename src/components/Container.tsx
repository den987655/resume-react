import styled from "styled-components";
import {theme} from "./styles/Theme";

type ContainerProps = {
    width?: string;
}


export const Container = styled.div<ContainerProps>`
    width: ${props => props.width || '1248px'};
    min-height: 100%;
    margin: 0 auto;

    @media ${theme.media.mobile} {
        width: 100%;
    }
`