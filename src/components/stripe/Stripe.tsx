import styled from "styled-components";

type StripePropsType = {
    width?: string
    margin?: string
}


export const StyledStripe = styled.hr<StripePropsType>`
    border: 1px solid var(--mirage);
    height: 2px;
    width: 100%;
    margin: ${props => props.margin || '16 0'};
    width: ${props => props.width || '100%'};

    @media (max-width: 390px) {
        width: 100%;
    }
`

