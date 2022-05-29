import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn, HeroLinks } from './HeroElements';
import { useAuth0 } from '@auth0/auth0-react';

const HeroSection = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>Welcome to FIKA Network!</HeroH1>
                <HeroP>
                    Is it awkward to reach out to people
                    on Linkedin? Then FIKA Network is made
                    for you! It will match you with your
                    perfect mentor allowing you to gain
                    valuable insight into your field of
                    interest.
                </HeroP>

                <HeroBtn>
                    {!isAuthenticated && (
                        <HeroLinks to='/getstarted' onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/Dashboard`})}>Get Started</HeroLinks>
                    )}
                </HeroBtn>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

