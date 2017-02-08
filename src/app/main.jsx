import './main.html'
import './test.html'

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

class Home extends React.Component {
  render () {
    return <Link to="/test.html">hi</Link>
  }
}

class Test extends React.Component {
  render () {
    return <Link to="/main.html">bai</Link>
  }
}

render((
  <Router history={browserHistory} >
    <Route path="/main.html" component={Home}/>
    <Route path="/test.html" component={Test}/>
  </Router>), document.getElementById('app'))
