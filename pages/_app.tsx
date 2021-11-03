import { Provider } from 'react-redux'
import { ThemeProvider, NoSsr } from '@mui/material'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '@layouts/index'
import { lightTheme } from '@themes/light'
import store from '../src/store'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NoSsr>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Head>
          <title>{process.env.APP_NAME}</title>
          <meta name="description" content={process.env.APP_NAME} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout.Header />
        <Layout.Container>
          <Component {...pageProps} />
        </Layout.Container>
        <Layout.Footer />
      </ThemeProvider>
    </Provider>
  </NoSsr>
)

export default MyApp
