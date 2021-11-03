import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import AppContainer from './components/appContainer'

interface LayoutInterface {
  Header: React.FC
  Footer: React.FC
  Container: React.FC
}

const Layout: LayoutInterface = {
  Header,
  Footer,
  Container: AppContainer,
}

export default Layout
