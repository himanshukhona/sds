import React, { Component } from 'react'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import MenuIcon from 'grommet/components/icons/base/Menu';
import User from 'grommet/components/icons/base/User';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props

    return (
      <Header>
        <Menu icon={<MenuIcon />}
          dropAlign={{"right": "right", "top": "top"}}>
          <Anchor href='#/contact'>
            Contact
          </Anchor>
          <Anchor href='#about'>
            About
          </Anchor>
          <Anchor href='#settings'>
            Settings
          </Anchor>
        </Menu>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Search inline={true}
            fill={true}
            size='medium'
            placeHolder='Search'
            dropAlign={{"right": "right"}} />
            <Anchor icon={<User />} href="#" onClick={this.props.login}>
            </Anchor>
        </Box>
      </Header>
    )
  }
}

export default HeaderComponent
