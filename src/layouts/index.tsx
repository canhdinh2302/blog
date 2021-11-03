import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AppContainer from './components/AppContainer'

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
