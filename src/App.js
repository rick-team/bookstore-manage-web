import React , { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from '@/view/Home'
import Login from '@/view/Login'
import NotFound from '@/view/NotFound'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from='/' exact to='/home'/>
          <Redirect  to='/404'/>
        </Switch>
      </Router>
    )
  }
}

export default App