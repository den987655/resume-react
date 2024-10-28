import React from 'react';
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import {Icon, IconContact} from "../../../components/icon/Icon";
export const Main =() => {
 return (
   <StyledMain>
     <FlexWrapper align={"center"} width={"1024px"} justify={"space-between"}>

       <MainBlock>
           <span>Hi there, myself</span>
         <h1>Ahammad Kabeer</h1>
         <p>I help turn your ideas into
             digital realities.</p>
           <p className="last-paragraph">I'm a software engineer specializing in building (and
               occasionally designing) exceptional digital experiences.</p>
           <StyledButton>
               <div>
                   <a href="#">Get in touch</a>
                   <IconContact iconId={'icon-contact'}/>
               </div>

           </StyledButton>
           <StyledButton>
           <a href="#">View Resume</a>
           </StyledButton>
       </MainBlock>
        <Photo>
            <img src="photo.png" alt="photo"/>
        </Photo>
     </FlexWrapper>
   </StyledMain>
 );
};

const StyledMain = styled.section`
    height: 955px;
    
`

const MainBlock = styled.div`
    margin-top: 454px;
    width: 513px;
    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
        color: var(--santas-gray);
        padding-bottom: 36px;
    }
    h1 {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 58px;
        line-height: 103%;
        color: var(--catskill-white);
        padding-bottom: 12px;
    }
    p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 35px;
        line-height: 113%;
        color: var(--mischka);
        padding-bottom: 12px;
    }
    .last-paragraph {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
        color: var(--santas-gray);
        padding-bottom: 36px;
    }


`
const StyledButton = styled.button`
    border: 1px solid var(--mirage);
    border-radius: 12px;
    padding: 12px 25px;
    width: 152px;
    height: 48px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0);
    margin-right: 16px;
    cursor: pointer;
    & div {

    }
   & p {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 12px;
        line-height: 155%;
        text-align: center;
        color: var(--catskill-white);
        margin-right: 10px;

    }
    & a:last-child {
         font-size: 13px;
         color: var(--gull-gray);
     }
    &:hover {
        background-color: #333;
    }
`

const Photo = styled.div`
    img {
    }
    width: 50%;
    margin-top: 396px;
`
