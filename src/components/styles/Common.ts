
type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Inter"};
    font-weight: ${weight || 400};
    color: ${color || "color: var(--catskill-white)"};
    line-height: ${lineHeight || 1.2};
    font-size: calc(100vw - 390px)/(1920 -390) * (${Fmax} - ${Fmin}) + ${Fmin}rem);
`
