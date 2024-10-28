import React from 'react';

import styled from "styled-components";

const Skill = () => {
    return (
        <SkillsItem>
            <div>
                <span>Photoshop</span>
            </div>

            <span>Illustrator</span>
            <span>Figma</span>
            <span>HTML/ CSS</span>
            <span>JQuery</span>
        </SkillsItem>
    );
};

const SkillsItem = styled.div`
    span {
        border: 1px solid #FF5B5B;
        color: #000;
    }
`