import React, { Component } from 'react'
import AppComponent from 'grommet/components/App';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

class Contact extends Component {
  render() {
    return (
      <AppComponent>
        <Columns>
          <Box>
            <LoginForm
              forgotPassword={<Anchor href='#'
              label='Forgot password?' />}/>
          </Box>
          <Box>
            <h1>Connect with</h1>
          </Box>
        </Columns>
      </AppComponent>
    );
  }
}

export default Contact
