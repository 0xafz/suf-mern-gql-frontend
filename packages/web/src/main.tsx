import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './apolloClient'
import { AuthProvider } from './context/auth'
import { AppProvider } from './context/state'
import GlobalStyles from './styles/GlobalStyles'
import ToastNotification from './components/ToastNotification'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={apolloClient}>
        <Router basename="/suf-mern-gql-frontend/">
          <AuthProvider>
            <AppProvider>
              <GlobalStyles />
              <ToastNotification />
              <App />
            </AppProvider>
          </AuthProvider>
        </Router>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
