import React from 'react';
import iconsSprite from '../../../src/assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLogo = (props: IconPropsType) => {
    return (
        <svg width={props.width || '31'} height={props.width || '32'} viewBox={props.viewBox || "0 0 31 32"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '24'} height={props.width || '24'} viewBox={props.viewBox || "0 0 34 34"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};
export const IconContact = (props: IconPropsType) => {
    return (
        <svg width={props.width || '24'} height={props.width || '24'} viewBox={props.viewBox || "0 0 24 24"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

export const IconArrow = (props: IconPropsType) => {
    return (
        <svg width={props.width || '37'} height={props.width || '38'} viewBox={props.viewBox || "0 0 37 38"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

