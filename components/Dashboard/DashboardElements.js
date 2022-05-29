import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const DashboardContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const Logout = styled.div`
z-index: 3;
max-width: 1200 px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

`

export const LogoutBtn = styled.nav`
    display: flex;
    align-items: center;
    height: 80px;
    padding-bottom: 31px;
    padding: 30px 30px;
    font-style: normal;
`;

export const LogoutLinks = styled(LinkR)`
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