import * as React from 'react'
import { Router } from 'react-static'
import { ThemeProvider } from 'styled-components'
import Routes from 'react-static-routes'
//
import { theme } from './theme/styles'
import AppErrorBoundary from 'components/ErrorBoundaries/AppErrorBoundary'
import 'theme/fonts.css'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <AppErrorBoundary>
          <ThemeProvider theme={theme}>
            <div id="app">
              <Routes />
            </div>
          </ThemeProvider>
        </AppErrorBoundary>
      </Router>
    )
  }
}
