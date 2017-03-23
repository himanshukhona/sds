import React, { Component } from 'react'
import AppComponent from 'grommet/components/App';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Split from 'grommet/components/Split';
import PlatformGoogleIcon from 'grommet/components/icons/base/PlatformGoogle';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';

class Contact extends Component {
  render() {
    return (
      <AppComponent>
        <Split>
          <Box>
            <LoginForm
              forgotPassword={<Anchor href='#'
              label='Forgot password?' />}/>
          </Box>
          <Box>
            <h1>Connect with</h1>
            <PlatformGoogleIcon size='large'/>
            <SocialFacebookOptionIcon size='large' />
          </Box>
        </Split>
      </AppComponent>
    );
  }
}

export default Contact
