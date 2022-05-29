import React from 'react';
import { DashboardContainer, Photo,Logout, LogoutBtn, LogoutLinks } from './DashboardElements';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '/Users/shubhibhoora/fika_network/src/img/logo.png';


const Dashboard = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <DashboardContainer>
      <Logout>
        <LogoutBtn>
          {isAuthenticated && (
          <LogoutLinks to='/logout' onClick={() => logout()}>Logout</LogoutLinks>
          )}
        </LogoutBtn>
      </Logout>
      <Photo><img src={logo} alt="Logo" /></Photo>
      
    </DashboardContainer>
  )
}

export default Dashboard
