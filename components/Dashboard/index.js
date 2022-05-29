import React from 'react';
import { DashboardContainer, Logout, LogoutBtn, LogoutLinks } from './DashboardElements';
import { useAuth0 } from '@auth0/auth0-react';


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
    </DashboardContainer>
  )
}

export default Dashboard