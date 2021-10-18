import React from 'react'
import { Paper } from '@mui/material'
import AppLogo from './components/appLogo'
import UserInfo from './components/userInfo'
import NavLinks from './components/navLinks'

const Header = React.memo(() => (
  <>
    <Paper elevation={3} className="fixed top-0 right-0 left-0 z-appBar">
      <div className="container h-8 sm:h-10 mx-auto px-4 flex items-center justify-between">
        <AppLogo />
        <NavLinks />
        <UserInfo />
      </div>
    </Paper>

    <section className="pt-16 sm:pt-20" />
  </>
))

export default Header
