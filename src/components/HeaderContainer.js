// containers/App.js

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'
import Header from '../components/Header'

// class HeaderContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//   }
//
//   handleLoginClick() {
//     this.props.login()
//   }
//
//   handleLogoutClick() {
//     this.props.logout()
//   }
//
//   render() {
//     const { error, isAuthenticated, profile } = this.props
//     return (
//       <div>
//         <div className="navbar navbar-default">
//           <div className="container-fluid">
//             <a className="navbar-brand">Redux Jedi</a>
//             <Auth
//               isAuthenticated={isAuthenticated}
//               profile={profile}
//               onLoginClick={this.handleLoginClick}
//               onLogoutClick={this.handleLogoutClick}
//             />
//           </div>
//         </div>
//
//         <div className="container-fluid">
//           <JedisList
//             jedis={allJedis}
//             error={error}
//             onClick={this.handleGetJedisClick}
//             onGetJediClick={this.handleGetJediClick}
//             isAuthenticated={isAuthenticated}
//           />
//           <Jedi jedi={singleJedi} />
//         </div>
//       </div>
//     )
//   }
// }

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(Header)
