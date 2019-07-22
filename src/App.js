import React , { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Login from './view/Login'
import Home from './view/Home'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        
        <Redirect from='/' to='/home'/>
      </Router>
    )
  }
}

export default App