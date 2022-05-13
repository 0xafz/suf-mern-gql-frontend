import '../app.css'
import GlobalStyles from '../styles/GlobalStyles'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/Layout/Default'
import apolloClient from '../apolloClient'
import { ApolloProvider } from '@apollo/client'
import ErrorBoundary from '../components/ErrorBoundary'
import ToastNotification from '../components/ToastNotification'
import { AuthProvider } from '../context/auth'
import { AppProvider } from '../context/state'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <AppProvider>
              <GlobalStyles />
              <ToastNotification />
              <DefaultLayout>
                {getLayout(<Component {...pageProps} />)}
              </DefaultLayout>
            </AppProvider>
          </AuthProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
