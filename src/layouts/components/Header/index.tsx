import React from 'react'
import { Paper } from '@mui/material'
import AppLogo from './components/AppLogo'
import UserInfo from './components/UserInfo'
import NavLinks from './components/NavLinks'
import AppDrawer from './components/AppDrawer'

const Header = () => (
  <header id="app-header">
    <Paper elevation={3} className="fixed top-0 right-0 left-0 z-appBar">
      <div className="container h-64 sm:h-80 mx-auto px-16 flex items-center justify-between">
        <div className="flex items-center">
          <AppDrawer />
          <AppLogo />
        </div>
        <NavLinks className="hidden lg:flex h-full" />
        <UserInfo />
      </div>
    </Paper>

    <section className="pt-64 sm:pt-80" />
  </header>
)

export default React.memo(Header)
