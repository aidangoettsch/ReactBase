import './app.html'

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

class Home extends React.Component {
  render () {
    return <Link to='/test'> This is the Home component! </Link>
  }
}

class Test extends React.Component {
  render () {
    return <Link to='/'> This is the Test component! </Link>
  }
}

render(
  (
    <Router history={browserHistory} >
      <Route path='/' component={Home} />
      <Route path='/test' component={Test} />
    </Router>
  ), document.getElementById('app')
)
