import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'; //goes to dif page

export const HeroContainer = styled.div`
    background: #6e5442;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const ImageBg = styled.image`
    width: 100%;
    height: 100%;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200 px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600 ox;

    @media screen and (max-width: 760px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtn = styled.nav`
    display: flex;
    align-items: center;
    height: 80px;
    padding-bottom: 31px;
    padding: 30px 30px;
    font-style: normal;
`;

export const HeroLinks = styled(LinkR)`
    border-radius: 50px;
    background: #CCABD8;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-style: normal;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #9cadce;
        color: #010606;
    }
`;
