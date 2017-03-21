import React, { Component } from 'react'
import {Link} from 'react-router'
import AppComponent from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';

class Settings extends Component {
  render() {
    return (
      <AppComponent>
        <Split>
          <Sidebar>
            <ul role="nav">
              <li><Link to="/accounts">Accounts</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </Sidebar>
          <Box>hello{this.props.children}</Box>
        </Split>
     </AppComponent>
    );
  }
}

export default Settings;
