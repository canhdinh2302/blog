import React from 'react'
import { Paper } from '@mui/material'
import AppLogo from './components/appLogo'
import UserInfo from './components/userInfo'
import NavLinks from './components/navLinks'

const Header = React.memo(() => (
  <>
    <Paper elevation={3} className="fixed top-0 right-0 left-0 z-appBar">
      <div className="container h-64 sm:h-80 mx-auto px-16 flex items-center justify-between">
        <AppLogo />
        <NavLinks />
        <UserInfo />
      </div>
    </Paper>

    <section className="pt-64 sm:pt-80" />
  </>
))

export default Header
