require('./main.html')

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const headerStyle = {
  color: 'blue'
}

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <div style={headerStyle} classID='header-wrapper'>
          <p> Test </p>
        </div>
      </div>
    )
  }
}

class Body extends React.Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

render((
  <Router history={browserHistory} >
    <Route path='/main.html' component={App} />
  </Router>), document.getElementById('app'))
